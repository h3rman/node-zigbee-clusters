'use strict';

const ZCLNode = require('./lib/Node');
const Cluster = require('./lib/Cluster');
const Clusters = require('./lib/clusters');
const BoundCluster = require('./lib/BoundCluster');
const zclTypes = require('./lib/zclTypes');
const zclFrames = require('./lib/zclFrames');

const {
    ZCLDataTypes,
    ZCLDataType,
    ZCLStruct
} = zclTypes;

const clusterIdMap = {};
const clusterNameMap = {};
Object.values(Clusters).forEach((Cluster) => {
    clusterIdMap[Cluster.NAME] = Cluster.ID;
    clusterNameMap[Cluster.ID] = Cluster.NAME;
});

const getClusterId = (clusterName) => clusterIdMap[clusterName];
const getClusterName = (clusterId) => clusterNameMap[clusterId];

module.exports = {
    getClusterId,
    getClusterName,
    Cluster,
    BoundCluster,
    ZCLNode,
    zclTypes,
    zclFrames,
    ZCLDataTypes,
    ZCLDataType,
    ZCLStruct,
    ...Clusters,
};
