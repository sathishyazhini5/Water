const db = require('./service')
const getAllUsers = async (req, res) => {
    
    try {
        
        const response = await db.getdetail()

        if (response.length > 0) {
            res.send({
                code: 200,
                message: "Data retrieved successfully",
                data: response
            })
        } else {
            res.send({
                code: 204,
                message: "No data found"
            })
        }
        
    } catch (error) {

        res.send({
            code: 400,
            message: "Something went wrong"
        })
        
    }
}
const getAllUsers2 = async (req, res) => {
    
    try {
        
        const response = await db.getdetails()

        if (response.length > 0) {
            res.send({
                code: 200,
                message: "Data retrieved successfully",
                data: response
            })
        } else {
            res.send({
                code: 204,
                message: "No data found"
            })
        }
        
    } catch (error) {

        res.send({
            code: 400,
            message: "Something went wrong"
        })
        
    }
}
const getAllUsers3 = async (req, res) => {
    
    try {
        
        const response = await db.getdetails()

        if (response.length > 0) {
            res.send({
                code: 200,
                message: "Data retrieved successfully",
                data: response
            })
        } else {
            res.send({
                code: 204,
                message: "No data found"
            })
        }
        
    } catch (error) {

        res.send({
            code: 400,
            message: "Something went wrong"
        })
        
    }
}
const getAllUsers4 = async (req, res) => {
    
    try {
        
        const response = await db.getdetails()

        if (response.length > 0) {
            res.send({
                code: 200,
                message: "Data retrieved successfully",
                data: response
            })
        } else {
            res.send({
                code: 204,
                message: "No data found"
            })
        }
        
    } catch (error) {

        res.send({
            code: 400,
            message: "Something went wrong"
        })
        
    }
}
const getrwph_analog = async(req,res)=>
{
    try {
        
        const response = await db.Rwph_ANALOG()

        if (response.length > 0) {
            res.send({
                code: 200,
                message: "Data retrieved successfully",
                data: response
            })
        } else {
            res.send({
                code: 204,
                message: "No data found"
            })
        }
        
    } catch (error) {

        res.send({
            code: 400,
            message: "Something went wrong"
        })
        
    }

}

const getcwphanalog = async(req,res)=>
{
    try {
        
        const response = await db.getcwphdata()

        if (response.length > 0) {
            res.send({
                code: 200,
                message: "Data retrieved successfully",
                data: response
            })
        } else {
            res.send({
                code: 204,
                message: "No data found"
            })
        }
        
    } catch (error) {

        res.send({
            code: 400,
            message: "Something went wrong"
        })
        
    }

}

module.exports = 
{
    getAllUsers,
    getAllUsers2,
    getAllUsers3,
    getrwph_analog,
    getcwphanalog
}