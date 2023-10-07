
/** Controller */
import Categories from '@/model/category'
// post : http://localhost:3000/api/users
export async function postCategory(req, res){
    try {
        const formData = req.body;
        if(!formData) return res.status(404).json( { error: "Form Data Not Provided...!"});
        Categories.create( formData, function(err, data){
            return res.status(200).json(data)
        })
    } catch (error) {
        return res.status(404).json({ error })
    }
}