const { model } = require("mongoose");
const db = require("../config/db.mongoose");

const getdetail = async () => {
    

   const response = await db.query(`select * from cwph_pillur."CWPH_PILLUR".analog a` )

    return response.rows;
}
const getdetails = async () => {
    
  
    const response = await db.query(`select * from cwph_pillur."CWPH_PILLUR".run_hr rh ` )
 
     return response.rows;
 }
 const getdetailsbyid = async () => {
    

    const response = await db.query(`select * from cwph_pillur."MEIL_PILLUR".mbr_analog ma  ` )
 
     return response.rows;
 }
 const getdetailsbyid1 = async () => {
    

    const response = await dbA.query(`select * from cwph_pillur."MEIL_PILLUR".mbr_analog ma  ` )
  79

     return response.rows;
 }
 const Rwph_ANALOG = async () => {
    
    
    const response = await db.query(
        `
    SELECT
    DATE1,
    TIME1,
    A1 AS "PT01-PRESSURE",
    A2 AS "PT02-PRESSURE",
    A3 AS "PT03-PRESSURE",
    A4 AS "PT_04-PRESSURE",
    A5 AS "PT_05-PRESSURE",
    A6 AS "PT_06-PRESSURE",
    A13 AS "PT_13-PRESSURE",
    A20 AS "FT_01-FLOW",
    A27 AS "FT_01_TT-FLOW TOTALIZER",
    A39 AS "ULT_01-LEVEL",
    A40 AS "ULT_02-LEVEL"
FROM cwph_pillur."RWPH_PILLUR".analog a2
ORDER BY DATE1 DESC
LIMIT 1  ` )
 
     return response.rows;
 }
 const getcwphdata = async () => { 
    
    
    const response = await db.query(
        `
        SELECT
    DATE1,
    TIME1,
    A1 AS "PT01-PRESSURE",
    A2 AS "PT02-PRESSURE",
    A3 AS "PT03-PRESSURE",
    A4 AS "PT_04-PRESSURE",
    A5 AS "PT_05-PRESSURE",
    A6 AS "PT_06-PRESSURE",
    A13 AS "FT_01-FLOW",
    A20 AS "ULT_01-LEVEL",
    A21 AS "ULT_02-LEVEL"
FROM cwph_pillur."CWPH_PILLUR".analog
ORDER BY DATE1 DESC, TIME1 DESC
LIMIT 1;
 ` )
 
     return response.rows;
 }


 



module.exports ={
    getdetail,
    getdetails,
    getdetailsbyid,
    getdetailsbyid1,
    Rwph_ANALOG,
    getcwphdata
}