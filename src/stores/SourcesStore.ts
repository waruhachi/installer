import { defineStore } from 'pinia';
import { Ref, ref } from 'vue';

export const useSourcesStore = defineStore('sources', () => {
  const manifest = ref('https://raw.githubusercontent.com/Drehmal-Team/installer/main/manifest.json');
  const selectedVersion = ref('');

  const map = ref({
    version: '2.2.1',
    versionName: 'Drehmal: APOTHEOSIS',
    compressedSizeInBytes: 4334379593,
    uncompressedSizeInBytes: 6303808530,
    hash: 'a218f27e1a267f3a9d34ada5e0d037eaab41e55a35a71beb0ff8282f8340c700',
    shards: [
      'https://github.com/Drehmal-Team/map/releases/download/v2.2.1/shard_1.zip', // 1
      'https://github.com/Drehmal-Team/map/releases/download/v2.2.1/shard_2.zip', // 2
      'https://github.com/Drehmal-Team/map/releases/download/v2.2.1/shard_3.zip', // 3
    ],
  });

  const resourcePack = ref({
    version: '2.2.1',
    source:
      'https://github.com/Drehmal-Team/map/releases/download/v2.2.1/resources.zip',
  });

  const partner = ref({
    name: 'Apex Hosting',
    affilLink: 'https://billing.apexminecrafthosting.com/aff.php?aff=6377',
  });

  const launcher = ref({
    fabric: {
      name: 'fabric',
      version: '0.11.2',
      source:
        'https://maven.fabricmc.net/net/fabricmc/fabric-installer/1.0.1/fabric-installer-1.0.1.jar',
      minecraftVersion: '1.20.1',
    },
    modList: [
      {
        name: 'Animatica',
        url: 'https://modrinth.com/mod/animatica',
        source:
          'https://cdn.modrinth.com/data/PRN43VSY/versions/uNgEPb10/animatica-0.6%2B1.20.jar',
        mc_version: '1.20.1',
        mod_version: '0.6',
      },
      {
        name: 'C2ME',
        url: 'https://modrinth.com/mod/c2me-fabric',
        source:
          'https://cdn.modrinth.com/data/VSNURh3q/versions/QZ5cUNXs/c2me-fabric-mc1.20.1-0.2.0%2Balpha.11.5.jar',
        mc_version: '1.20.1',
        mod_version: '0.2.0-alpha.11.5',
      },
      {
        name: 'CIT Resewn',
        url: 'https://modrinth.com/mod/cit-resewn',
        source:
          'https://cdn.modrinth.com/data/otVJckYQ/versions/8uQeAHwk/citresewn-1.1.5%2B1.20.1.jar',
        mc_version: '1.20.1',
        mod_version: '1.1.5',
      },
      {
        name: 'Cull Leaves',
        url: 'https://modrinth.com/mod/cull-leaves',
        source:
          'https://cdn.modrinth.com/data/GNxdLCoP/versions/3rzOQJrq/cullleaves-fabric-3.2.0.jar',
        mc_version: '1.20.1',
        mod_version: '3.2.0',
      },
      {
        name: 'Disable Custom Worlds Advice',
        url: 'https://modrinth.com/mod/dcwa',
        source:
          'https://cdn.modrinth.com/data/HdwRs3kc/versions/P23QCBEG/DisableCustomWorldsAdvice-4.1.jar',
        mc_version: '1.20.1',
        mod_version: '4.1',
      },
      {
        name: 'Dynamic FPS',
        url: 'https://modrinth.com/mod/dynamic-fps',
        source:
          'https://cdn.modrinth.com/data/LQ3K71Q1/versions/48hFxWw7/dynamic-fps-3.4.3%2Bminecraft-1.20.0-fabric.jar',
        mc_version: '1.20.1',
        mod_version: '3.4.2',
      },
      {
        name: 'Enhanced Block Entities',
        url: 'https://modrinth.com/mod/ebe',
        source:
          'https://cdn.modrinth.com/data/OVuFYfre/versions/i3v1Skck/enhancedblockentities-0.9%2B1.20.jar',
        mc_version: '1.20.1',
        mod_version: '0.9',
      },
      {
        name: 'Entity Culling',
        url: 'https://modrinth.com/mod/entity-culling',
        source:
          'https://cdn.modrinth.com/data/NNAgCjsB/versions/frGGaFrx/entityculling-fabric-1.6.5-mc1.20.1.jar',
        mc_version: '1.20.1',
        mod_version: '1.6.5',
      },
      {
        name: 'Fabric API',
        url: 'https://modrinth.com/mod/fabric-api',
        source:
          'https://cdn.modrinth.com/data/P7dR8mSH/versions/P7uGFii0/fabric-api-0.92.2%2B1.20.1.jar',
        mc_version: '1.20.1',
        mod_version: '0.92.2',
      },
      {
        name: 'FabricSkyboxes',
        url: 'https://modrinth.com/mod/fabricskyboxes',
        source:
          'https://cdn.modrinth.com/data/YBz7DOs8/versions/cezLH6eB/fabricskyboxes-0.7.3%2Bmc1.20.1.jar',
        mc_version: '1.20.1',
        mod_version: '0.7.3',
      },
      {
        name: 'Ferrite Core',
        url: 'https://modrinth.com/mod/ferrite-core',
        source:
          'https://cdn.modrinth.com/data/uXXizFIs/versions/unerR5MN/ferritecore-6.0.1-fabric.jar',
        mc_version: '1.20.1',
        mod_version: '6.0.1',
      },
      {
        name: 'Indium',
        url: 'https://modrinth.com/mod/indium',
        source:
          'https://cdn.modrinth.com/data/Orvt0mRa/versions/Aouse6P7/indium-1.0.30%2Bmc1.20.4.jar',
        mc_version: '1.20.1',
        mod_version: '1.0.30',
      },
      {
        name: 'Iris Shaders',
        url: 'https://modrinth.com/mod/iris',
        source:
          'https://cdn.modrinth.com/data/YL57xq9U/versions/KHQ2Hnpt/iris-1.7.0%2Bmc1.20.1.jar',
        mc_version: '1.20.1',
        mod_version: '1.7.0',
      },
      {
        name: 'LambDynamicLights',
        url: 'https://modrinth.com/mod/lambdynamiclights',
        source:
          'https://cdn.modrinth.com/data/yBW8D80W/versions/mYl4RvKg/lambdynamiclights-2.3.2%2B1.20.1.jar',
        mc_version: '1.20.1',
        mod_version: '2.3.2',
      },
      {
        name: 'Lazy DFU',
        url: 'https://modrinth.com/mod/lazydfu',
        source:
          'https://cdn.modrinth.com/data/hvFnDODi/versions/0.1.3/lazydfu-0.1.3.jar',
        mc_version: '1.20.1',
        mod_version: '0.1.3',
      },
      {
        name: 'Lithium',
        url: 'https://modrinth.com/mod/lithium',
        source:
          'https://cdn.modrinth.com/data/gvQqBUqZ/versions/ZSNsJrPI/lithium-fabric-mc1.20.1-0.11.2.jar',
        mc_version: '1.20.1',
        mod_version: '0.11.2',
      },
      {
        name: 'Memory Leak Fix',
        url: 'https://modrinth.com/mod/memoryleakfix',
        source:
          'https://cdn.modrinth.com/data/NRjRiSSD/versions/5xvCCRjJ/memoryleakfix-fabric-1.17%2B-1.1.5.jar',
        mc_version: '1.20.1',
        mod_version: '1.1.5',
      },
      {
        name: 'ModernFix',
        url: 'https://modrinth.com/mod/modernfix',
        source:
          'https://cdn.modrinth.com/data/nmDcB62a/versions/CB2UOpt3/modernfix-fabric-5.18.1%2Bmc1.20.1.jar',
        mc_version: '1.20.1',
        mod_version: '5.18.1',
      },
      {
        name: 'Sodium',
        url: 'https://modrinth.com/mod/sodium',
        source:
          'https://cdn.modrinth.com/data/AANobbMI/versions/mhZtY2lR/sodium-fabric-0.5.8%2Bmc1.20.1.jar',
        mc_version: '1.20.1',
        mod_version: '0.5.8',
      },
      {
        name: 'Sodium Extra',
        url: 'https://modrinth.com/mod/sodium-extra',
        source:
          'https://cdn.modrinth.com/data/PtjYWJkn/versions/I7ggF6B5/sodium-extra-0.5.4%2Bmc1.20.1-build.115.jar',
        mc_version: '1.20.1',
        mod_version: '0.5.4',
      },
      {
        name: 'Starlight',
        url: 'https://modrinth.com/mod/starlight',
        source:
          'https://cdn.modrinth.com/data/H8CaAYZC/versions/XGIsoVGT/starlight-1.1.2%2Bfabric.dbc156f.jar',
        mc_version: '1.20.1',
        mod_version: '1.1.2',
      },
      {
        name: 'WI Zoom',
        url: 'https://modrinth.com/mod/wi-zoom',
        source:
          'https://cdn.modrinth.com/data/o7DitHWP/versions/AYN9L9xU/WI-Zoom-1.5-MC1.20.1.jar',
        mc_version: '1.20.1',
        mod_version: '1.5',
      },
      {
        name: 'Entity Model Features',
        url: 'https://modrinth.com/mod/entity-model-features',
        source:
          'https://cdn.modrinth.com/data/4I1XuqiY/versions/jkLvxFFA/entity_model_features_fabric_1.20.1-2.0.2.jar',
        mc_version: '1.20.1',
        mod_version: '2.0.2',
      },
      {
        name: 'Entity Texture Features',
        url: 'https://modrinth.com/mod/entitytexturefeatures',
        source:
          'https://cdn.modrinth.com/data/BVzZfTc1/versions/jXc7eTKi/entity_texture_features_fabric_1.20.1-6.0.1.jar',
        mc_version: '1.20.1',
        mod_version: '6.0.1',
      },
    ],
    launcher_icon:
      'data:image/png;base64,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',
  });

  const shaders = ref({
    name: 'Sildurs Enhanced Default',
    version: '1.16',
    source:
      'https://mediafilez.forgecdn.net/files/4688/998/Sildur%27s%20Enhanced%20Default%20v1.16%20Fancy.zip',
  });

  const server = ref({
    // per https://minecraft.wiki/w/Java_Edition_1.20.1
    source:
      'https://piston-data.mojang.com/v1/objects/84194a2f286ef7c14ed7ce0090dba59902951553/server.jar',
    version: '1.20.1',
    properties: [
      'enable-command-block=true',
      'view-distance=16',
      'spawn-protection=0',
    ],
  });

  const versions: Ref<{
    [key: string]: {
      server: { source: string; version: string; properties: string[] };
      resourcepack: { source: string; version: string };
      map: {
        shards: string[];
        uncompressedSizeInBytes: number;
        versionName: string;
        version: string;
        hash: string;
        compressedSizeInBytes: number
      };
      launcher: {
        fabric: { name: string; source: string; minecraftVersion: string; version: string };
        modList: { mod_version: string; name: string; source: string; url: string; mc_version: string }[];
        launcher_icon: string
      }
    }
  }> = ref({
    beta: {
      map: {
        version: '2.2.1',
        versionName: 'Drehmal: APOTHEOSIS',
        compressedSizeInBytes: 4334379593,
        uncompressedSizeInBytes: 6303808530,
        hash: 'a218f27e1a267f3a9d34ada5e0d037eaab41e55a35a71beb0ff8282f8340c700',
        shards: [
          'https://github.com/Drehmal-Team/map/releases/download/v2.2.1/shard_1.zip', // 1
          'https://github.com/Drehmal-Team/map/releases/download/v2.2.1/shard_2.zip', // 2
          'https://github.com/Drehmal-Team/map/releases/download/v2.2.1/shard_3.zip', // 3
        ],
      },
      resourcepack: {
        version: '2.2.1',
        source:
          'https://github.com/Drehmal-Team/map/releases/download/v2.2.1/resources.zip',
      },
      launcher: {
        fabric: {
          name: 'fabric',
          version: '0.11.2',
          source:
            'https://maven.fabricmc.net/net/fabricmc/fabric-installer/1.0.1/fabric-installer-1.0.1.jar',
          minecraftVersion: '1.20.1',
        },
        modList: [
          {
            name: 'Animatica',
            url: 'https://modrinth.com/mod/animatica',
            source:
              'https://cdn.modrinth.com/data/PRN43VSY/versions/uNgEPb10/animatica-0.6%2B1.20.jar',
            mc_version: '1.20.1',
            mod_version: '0.6',
          },
          {
            name: 'C2ME',
            url: 'https://modrinth.com/mod/c2me-fabric',
            source:
              'https://cdn.modrinth.com/data/VSNURh3q/versions/QZ5cUNXs/c2me-fabric-mc1.20.1-0.2.0%2Balpha.11.5.jar',
            mc_version: '1.20.1',
            mod_version: '0.2.0-alpha.11.5',
          },
          {
            name: 'CIT Resewn',
            url: 'https://modrinth.com/mod/cit-resewn',
            source:
              'https://cdn.modrinth.com/data/otVJckYQ/versions/8uQeAHwk/citresewn-1.1.5%2B1.20.1.jar',
            mc_version: '1.20.1',
            mod_version: '1.1.5',
          },
          {
            name: 'Cull Leaves',
            url: 'https://modrinth.com/mod/cull-leaves',
            source:
              'https://cdn.modrinth.com/data/GNxdLCoP/versions/3rzOQJrq/cullleaves-fabric-3.2.0.jar',
            mc_version: '1.20.1',
            mod_version: '3.2.0',
          },
          {
            name: 'Disable Custom Worlds Advice',
            url: 'https://modrinth.com/mod/dcwa',
            source:
              'https://cdn.modrinth.com/data/HdwRs3kc/versions/P23QCBEG/DisableCustomWorldsAdvice-4.1.jar',
            mc_version: '1.20.1',
            mod_version: '4.1',
          },
          {
            name: 'Dynamic FPS',
            url: 'https://modrinth.com/mod/dynamic-fps',
            source:
              'https://cdn.modrinth.com/data/LQ3K71Q1/versions/48hFxWw7/dynamic-fps-3.4.3%2Bminecraft-1.20.0-fabric.jar',
            mc_version: '1.20.1',
            mod_version: '3.4.2',
          },
          {
            name: 'Enhanced Block Entities',
            url: 'https://modrinth.com/mod/ebe',
            source:
              'https://cdn.modrinth.com/data/OVuFYfre/versions/i3v1Skck/enhancedblockentities-0.9%2B1.20.jar',
            mc_version: '1.20.1',
            mod_version: '0.9',
          },
          {
            name: 'Entity Culling',
            url: 'https://modrinth.com/mod/entity-culling',
            source:
              'https://cdn.modrinth.com/data/NNAgCjsB/versions/frGGaFrx/entityculling-fabric-1.6.5-mc1.20.1.jar',
            mc_version: '1.20.1',
            mod_version: '1.6.5',
          },
          {
            name: 'Fabric API',
            url: 'https://modrinth.com/mod/fabric-api',
            source:
              'https://cdn.modrinth.com/data/P7dR8mSH/versions/P7uGFii0/fabric-api-0.92.2%2B1.20.1.jar',
            mc_version: '1.20.1',
            mod_version: '0.92.2',
          },
          {
            name: 'FabricSkyboxes',
            url: 'https://modrinth.com/mod/fabricskyboxes',
            source:
              'https://cdn.modrinth.com/data/YBz7DOs8/versions/cezLH6eB/fabricskyboxes-0.7.3%2Bmc1.20.1.jar',
            mc_version: '1.20.1',
            mod_version: '0.7.3',
          },
          {
            name: 'Ferrite Core',
            url: 'https://modrinth.com/mod/ferrite-core',
            source:
              'https://cdn.modrinth.com/data/uXXizFIs/versions/unerR5MN/ferritecore-6.0.1-fabric.jar',
            mc_version: '1.20.1',
            mod_version: '6.0.1',
          },
          {
            name: 'Indium',
            url: 'https://modrinth.com/mod/indium',
            source:
              'https://cdn.modrinth.com/data/Orvt0mRa/versions/Aouse6P7/indium-1.0.30%2Bmc1.20.4.jar',
            mc_version: '1.20.1',
            mod_version: '1.0.30',
          },
          {
            name: 'Iris Shaders',
            url: 'https://modrinth.com/mod/iris',
            source:
              'https://cdn.modrinth.com/data/YL57xq9U/versions/KHQ2Hnpt/iris-1.7.0%2Bmc1.20.1.jar',
            mc_version: '1.20.1',
            mod_version: '1.7.0',
          },
          {
            name: 'LambDynamicLights',
            url: 'https://modrinth.com/mod/lambdynamiclights',
            source:
              'https://cdn.modrinth.com/data/yBW8D80W/versions/mYl4RvKg/lambdynamiclights-2.3.2%2B1.20.1.jar',
            mc_version: '1.20.1',
            mod_version: '2.3.2',
          },
          {
            name: 'Lazy DFU',
            url: 'https://modrinth.com/mod/lazydfu',
            source:
              'https://cdn.modrinth.com/data/hvFnDODi/versions/0.1.3/lazydfu-0.1.3.jar',
            mc_version: '1.20.1',
            mod_version: '0.1.3',
          },
          {
            name: 'Lithium',
            url: 'https://modrinth.com/mod/lithium',
            source:
              'https://cdn.modrinth.com/data/gvQqBUqZ/versions/ZSNsJrPI/lithium-fabric-mc1.20.1-0.11.2.jar',
            mc_version: '1.20.1',
            mod_version: '0.11.2',
          },
          {
            name: 'Memory Leak Fix',
            url: 'https://modrinth.com/mod/memoryleakfix',
            source:
              'https://cdn.modrinth.com/data/NRjRiSSD/versions/5xvCCRjJ/memoryleakfix-fabric-1.17%2B-1.1.5.jar',
            mc_version: '1.20.1',
            mod_version: '1.1.5',
          },
          {
            name: 'ModernFix',
            url: 'https://modrinth.com/mod/modernfix',
            source:
              'https://cdn.modrinth.com/data/nmDcB62a/versions/CB2UOpt3/modernfix-fabric-5.18.1%2Bmc1.20.1.jar',
            mc_version: '1.20.1',
            mod_version: '5.18.1',
          },
          {
            name: 'Sodium',
            url: 'https://modrinth.com/mod/sodium',
            source:
              'https://cdn.modrinth.com/data/AANobbMI/versions/mhZtY2lR/sodium-fabric-0.5.8%2Bmc1.20.1.jar',
            mc_version: '1.20.1',
            mod_version: '0.5.8',
          },
          {
            name: 'Sodium Extra',
            url: 'https://modrinth.com/mod/sodium-extra',
            source:
              'https://cdn.modrinth.com/data/PtjYWJkn/versions/I7ggF6B5/sodium-extra-0.5.4%2Bmc1.20.1-build.115.jar',
            mc_version: '1.20.1',
            mod_version: '0.5.4',
          },
          {
            name: 'Starlight',
            url: 'https://modrinth.com/mod/starlight',
            source:
              'https://cdn.modrinth.com/data/H8CaAYZC/versions/XGIsoVGT/starlight-1.1.2%2Bfabric.dbc156f.jar',
            mc_version: '1.20.1',
            mod_version: '1.1.2',
          },
          {
            name: 'WI Zoom',
            url: 'https://modrinth.com/mod/wi-zoom',
            source:
              'https://cdn.modrinth.com/data/o7DitHWP/versions/AYN9L9xU/WI-Zoom-1.5-MC1.20.1.jar',
            mc_version: '1.20.1',
            mod_version: '1.5',
          },
          {
            name: 'Entity Model Features',
            url: 'https://modrinth.com/mod/entity-model-features',
            source:
              'https://cdn.modrinth.com/data/4I1XuqiY/versions/jkLvxFFA/entity_model_features_fabric_1.20.1-2.0.2.jar',
            mc_version: '1.20.1',
            mod_version: '2.0.2',
          },
          {
            name: 'Entity Texture Features',
            url: 'https://modrinth.com/mod/entitytexturefeatures',
            source:
              'https://cdn.modrinth.com/data/BVzZfTc1/versions/jXc7eTKi/entity_texture_features_fabric_1.20.1-6.0.1.jar',
            mc_version: '1.20.1',
            mod_version: '6.0.1',
          },
        ],
        launcher_icon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAHoklEQVR4Xr2by24dRRCG52RhoySABSGwQUiAiLxAQmzZsGOBeAJehEfIi+QRsuEhQGITISE2LBA3yUCIYi98UI2n2n//U7ee4+Ss7HN6uru+rkt3dc3uqwdf7Kfg8+/zp6tfz87/MZ94dvEs6qr9dnb+d6mdNjo5ft1sf/votvn9yfFrq+9ffeWu2XYXAagI//2vP0wP3vwwFGhUYKszD4K0PQTECoAltAxirboIrx+BkAn6+39/Dq38/Tv3wvYWFA+GdISaoRrRAIwILp2puv/410/T23ffahMdFbJKpApD5sMayVAQxO7z9z4zfYBn5yo8r/YWwc8fTdN0eoXg6P1bjcXu5DLkksG4Wu2137BAdAAyoXFWCiAS/Py75Ykn03T8tS3TDEE+pz0EbG0BqUCogNh98s7HbhSwvDquvCd8ExyleDJN0y/TdPzNGsT5w2ma3o0hyFOZZnDPCIk1QrVhBcALZVWVR7VeiRpBcMzB0psREB6EDkAWvyurrhMNAUgjgTCtTYKfQ5/wIiHsPnrjg84EolDmqvzDa9VOAbwkCPuzW53JqCagKYgWNABbYvhs68uKtlVavHoa3iLHqM6TooPXp2USAgD9hmUKDUDFo/PgpqNLpV7U/9O8IfafmUPFQboA7t+5N5vAaBx3AaBGkDYcFwRvvoRCqK7oiBZgW88Z7ioA9vv9tNvtWn9umAPnxr5gRPgOAplKBCKKDrxvUF+wAsDOg4nrBC5+pt0aTRQBVIRXf4IbpuZjYP9wiCZYWjADQPXnAZAq/9ZBAACjwgtkb9fIYKTvoy+vt82jIZKjgWkCh0CQ3Z7u6uZ479i9CMa/KQT8nrVA4UaOsWIKKxNgR+hBsFSwacKiBTrJiurn8WDRDnWu4FgtCCy8Fw4bANkISRj87ekfnaOTifHD+B1PfIZAZsAHIFW/G4s4xj7BM1n9fmUCAkDO0Pphby+UIz+AIC4eX7qnvurpTftjSNG+QzWhuvoyhqkBktiorM5oKPJCEMKzdqI4l2zjVcknmFFATQAns6K/eF4lPBqKrH24Z/veqTMDIP1lEFwA8nB04lNPnIWfZkYnl3NYUyfoHUQYAp5Kre35IRDcjZCeBj0APOiWfXkVgABRCFsBoCagT3DPApIRGh00g8DOKAKgCUpNx7EWjPiBplHGSfNGAbC9sSp7AND7akYGM7QCYXQxurF1r2Ck3hCAhHzJHM/H4S0aoIN6mhAlMTkhMQKg2zIz9SDdJk0VgAivH4FgAsBdYeZ4KrsxnABrgWUCWQpuNOmqAiMEvTvoAGA0UNvLAFjmkKWxVQtEBRFAZP+44BkAzTJbqfjVTlDT4p7tVQBYMdjLyUUakAEIkzBg99Fp9IUB4PBjnSN48FENiAB0eQRIsVsHMpyHmxUeMYEo/KDq4sAcBbIIkDnADgBctMhzDGEMAFxdedvX+fsgy4tO0LL/K98Th8AMwJyHEGGXmye8bWIIHQDNCerEzB0YqJQJIckD8CbEWn3pN9oDhACWBVhBgMVDLZD5mAkRFK7bgZFKocp3QCBZwQOy87v6/6qSg3eBsggjx2FrPmoSnJxxU2K8sqsJeBAcu6gAwEfT1a+aImiDdRGLqy9NVzlBVFcXgjyZ3ADdFABMirJdj/okKwqtssLosKw02WyLmU9YZuYdh7lQIT0GP7q+TB0dWyFZwjcNsLJAUf6urUSiCRUtsISXbt2L2EH4KQDJfWqj7FKEVQ6rOzx1jCDgM9X6g4oGenFfT4HSR6sPYACzWjg1OubtTeIcrclwtUZF+AZ70P+gSVuRSC78Og2IAMz05dLy277UJXNOkRaUhIfr8tDxBRcxbkIEr8Yw2RndrsyrQUmHzDlZEFAYtvnwGq4Qeq0mVmaqiwJVAGqH0f67mwAlKzhBmQmvfa0uZGGQyi2UmRXeogEWgPk79Qdsp3RO8PYaWbpduvUgWADw9OiF5M0agCssguOuqzMHJ1VlhdkKAAtCdAGr82QA6hDN63G+CsvK0uaVXz4CwgIgP1tbUwRZBaAQMrW3NACjgkQjcyfIk8oANPWXP5aCx5UPkC+cQkltKxPOUu7atjQniB5eJAoBjDhF9QvzBL1zglMjiADk72qitYNM/3D2KAQgz0bX40PUC1tVnQwXRGwtnmYQVuosBIC5cr0er9ojl8mEGqB+YqkaMStCBkpmUfAoRM7+BypVzIwQa0AVgOWVI9XkyZilMlshPIbCraBEzwQgE4uKpTKhshXA5zPv3fyJ8S5BNg9xjtauNNWAQwGUNEGc4GlQOBWc+yvRQSPDEAAskOCb2MqgvCKuJkAFqfvyhNYeU6WZjlGpDPPqGF0NiAB4ISlTQ9MxGiXyrvc2KsIiCF5tEM5jM4CDICRxvxK+LNheURS2ZU1wt8KeBmSrfOjvXH98SH/WNZzX3yot/rIB8FGYne8oiNHd6iotzlVilTK50UlaQnMfW8c9ZPVlDvPlaFajNyqwtq8IfigIayPlzVfMDl+qHHplBjv1VqsicJYQzWBv1pT99atRWh80awDWCOng2ftD2SSt37k2SNp4dwKj/SuUbAGwOErHaO8NZq/OyQMjYEZeea++qzgKhtvj1bz+9j/yiDyyPT87LgAAAA5lWElmTU0AKgAAAAgAAAAAAAAA0lOTAAAAAElFTkSuQmCC',
      },
      server: {
        source:
          'https://piston-data.mojang.com/v1/objects/84194a2f286ef7c14ed7ce0090dba59902951553/server.jar',
        version: '1.20.1',
        properties: [
          'enable-command-block=true',
          'view-distance=16',
          'spawn-protection=0',
        ],
      },
    }
  });

  return {
    manifest,
    selectedVersion,
    map,
    resourcePack,
    partner,
    launcher,
    shaders,
    server,
    versions,
  };
});
