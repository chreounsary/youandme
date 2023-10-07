import connectMongo from '../../../database/conn'
import { getCategory, postCategory, putCategory, deleteCategory } from '../../../database/category';

export default async function handler(req, res) {
    connectMongo().catch(() => res.status(405).json({ error: "Error in the Connection"}))

    // type of request
    const { method } = req

    switch(method){
        case 'GET' :
            getCategory(req, res)
            break;
        case 'POST':
            postCategory(req, res)
            break;
        case 'PUT':
            putCategory(req, res)
            break;
        case 'DELETE':
            deleteCategory(req, res)
            break;
        default : 
            // res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            // res.status(405).end(`Method ${method} Not Allowd`)
            break;
    }
  }
  