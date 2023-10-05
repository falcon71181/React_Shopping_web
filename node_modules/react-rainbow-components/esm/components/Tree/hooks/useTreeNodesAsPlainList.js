import { useMemo } from 'react';
import buildPlainListFromTree from '../helpers/buildPlainListFromTree';
export default function useTreeNodesAsPlainList(data) {
  var dataStr = JSON.stringify(data, ['label', 'isExpanded', 'children']);
  return useMemo(function () {
    return buildPlainListFromTree(data);
  }, [dataStr]);
}