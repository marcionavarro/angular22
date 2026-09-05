export interface IUser {
  employeeId: number;
  employeeName: string;
  contactNo: string;
  emailId: string;
  deptId: number;
  password: string;
  gender: string;
  role: string;
  createdDate: string;
}

export interface IApiResponseModel {
  message: string;
  result: boolean;
  data: any;
}

export interface IParentDepartment {
  departmentId: number;
  departmentName: string;
  departmentLogo: string;
}

export interface IChildDepartment {
  childDeptId: number;
  parentDptId: number;
  departmentName: string;
}
