import { LoginComponent } from "./components/login/login.component";
import { EmployeeComponent } from "./components/employee/employee.component";
import { EmployeeFormComponent } from "./components/employee-form/employee-form.component";
import { EmployeeFeebackListComponent } from "./components/employee-feeback-list/employee-feeback-list.component";


export const Routes = [
    { path: '', redirectTo:'login', pathMatch: 'full' },
    {    
        path: 'login',
        component: LoginComponent
    },
    {    
        path: 'employee',
        component: EmployeeComponent
    },
    {    
        path: 'employee-form',
        component: EmployeeFormComponent
    },
    {    
        path: 'employee-feedback-list',
        component: EmployeeFeebackListComponent
    },
];

