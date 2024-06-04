import { NextApiResponse } from 'next';

type response = {
  code?: number;
  status?: string;
  message?: string;
  data?: any;
}

export function OKResponse(res: NextApiResponse<response>, data: any) {
  res.status(200).json({
    code: 200,
    data: data,
  });
}