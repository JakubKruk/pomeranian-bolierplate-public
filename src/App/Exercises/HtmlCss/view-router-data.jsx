
import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './BLOK_10/router-data';
import { blockRouterMetaData as standardTags } from './StandardTags/router-data';

export const blockRouterMetaData = [blockRouterMetaData121220231,standardTags];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);