import { DispatchAction, Loader } from '@thoraxia/shared';

export enum CompanyTypes {
  SetStatus = '[Company] Set Status',
  SetData = '[Company] Set Data',
}

type SetStatusAction = DispatchAction<CompanyTypes.SetStatus, Loader>;
type SetDataAction = DispatchAction<CompanyTypes.SetData, any>;

export type CompanyActionTypes =
  SetStatusAction |
  SetDataAction;
