//*desc Get all contacts
//*route GET /api/contacts
const getContacts = (req, res) => {
    res.status(200).json({ message: "Get all contacts" });
};

//*desc Create new contacts
//*route Post /api/contacts
const createContact = (req, res) => {
    console.log(req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("Please fill all the fields");
    }
    res.status(201).json({ message: "Create contacts" });
};

//*desc Get individual contact
//*route get /api/contacts/:id
const GetContact = (req, res) => {
    const { id } = req.params;
    res.status(200).json({ message: `Get contact for ${id}` });
};

//*desc Update individual contact
//*route put /api/contacts/:id
const updateContact = (req, res) => {
    const { id } = req.params;
    res.status(200).json({ message: `Update contact for ${id}` });
};

//*desc Delete individual contact
//*route delete /api/contacts/:id
const deleteContact = (req, res) => {
    res.status(200).json({ message: `Delete contact for ${req.params.id}` });
};

module.exports = {
    getContacts,
    createContact,
    GetContact,
    updateContact,
    deleteContact,
};
