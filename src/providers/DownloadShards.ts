const https = require('https');
const fs = require('fs');
import log from 'electron-log';
import { ShardsBox } from 'src/components/models';
import { Ref } from 'vue';
const path = require('path');

function downloadShards(
  url: string,
  savePath: string,
  ref: Ref<ShardsBox>
): Promise<void> {
  return new Promise((resolve, reject) => {
    const name = savePath.split(path.sep).pop();
    const file = fs.createWriteStream(savePath);
    file.on('error', (err: any) => {
      log.error(`file error on ${name} ${url}`, err);
    });

    const options = {
      // headers: {
      //   'accept-encoding': 'gzip, deflate, br',
      // },
    };
    https.get(url, options).on('response', function (res: any) {
      // const startTime = Date.now();
      let downloaded = 0;
      const contentLength = +(res.headers['content-length'] as string);
      const fileSize = contentLength ? contentLength : 1;
      const fileSizeMB = fileSize / Math.pow(1024, 2);
      ref.value.totalSize += fileSizeMB;

      res.setTimeout(24 * 60 * 60 * 1000);
      res
        .on('data', function (chunk: any) {
          const readyForMore = file.write(chunk);
          if (!readyForMore) {
            res.pause();
            file.once('drain', () => {
              res.resume();
            });
          }

          downloaded += chunk.length;
          const downloadPortion = downloaded / fileSize;
          const percent = downloadPortion * 100;
          const downloadedMB = downloaded / Math.pow(1024, 2);

          ref.value.downloaded += chunk.length / Math.pow(1024, 2);
          ref.value.downloadProgress =
            ref.value.downloaded / ref.value.totalSize;

          const thisPercent =
            (ref.value.downloaded / ref.value.totalSize) * 100;
          if (thisPercent > ref.value.downloadPercent) {
            ref.value.downloadPercent = thisPercent;
            ref.value.downloadLabel = `Map download: ${ref.value.downloadPercent.toFixed(
              1
            )}% (${Math.floor(ref.value.downloaded)}/${Math.floor(
              ref.value.totalSize
            )}MB)`;
          }
        })
        .on('end', function () {
          file.end();
          log.info(`${name} downloaded successfully. ${Date.now()}`);
          resolve();
        })
        .on('error', (err: any) => {
          log.error(`download error on ${name} ${url}`, err);
        })
        .on('timeout', () => {
          log.error(`got timeout event for ${url}`);
        });
    });
  });
}

export { downloadShards };
