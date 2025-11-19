
const Family = require("../Moudels/family")

const getAllChildren= async (req, res) => {
  const { familyId} = req.body
 try {
        const Children = await Family.find().lean();
        if (!Children.length) {
            return res.status(404).send("No family found");
        }
         res.json(Children);
 } 
 catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
    res.status(404).send("No family found");
};


