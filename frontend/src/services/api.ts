import axios from 'axios';

interface DashboardUserResponse {
    data: {
        code: number;
        data: {
            lastLoginLog: {
                createDate: string | null;
                ip: string;
            };
            siteCount: number;
            streamCount: number;
            suitCount: number;
            certCount: number;
        };
    };
}

export const getDashboardUser = (): Promise<DashboardUserResponse> => {
    return axios.get('/api/cdn/dashboard/user');
};