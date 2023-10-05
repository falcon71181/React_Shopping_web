import { isServer } from '../../libs/utils';
export var FileListType = isServer ? Object : window.FileList;