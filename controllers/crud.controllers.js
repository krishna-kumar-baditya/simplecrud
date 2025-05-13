const CrudModel = require("../models/crud.model");

class CrudController {
    async showForm(req, res) {
        try {
            res.render("form");
        } catch (error) {
            throw error;
        }
    }
    async submit(req, res) {
        try {
            const { firstName, lastName } = req.body;
            console.log(req.body.firstName);
            console.log(req.body.lastName);

            const data = await CrudModel.create({
                firstName,
                lastName,
            });
            if (data) {
                req.flash("success", "Data save successfully!");
                return res.redirect("/list");
            } else {
                req.flash("error", "Data failed to create!");
            }
        } catch (error) {
            throw error;
        }
    }
    async list(req, res) {
        try {
            const allData = await CrudModel.find({ isDeleted: false });
            console.log({ allData });

            res.render("list", { allData });
        } catch (error) {
            throw error;
        }
    }
    async edit(req, res) {
        try {
            const allData = await CrudModel.findOne({
                isDeleted: false,
                _id: req.params.id,
            });
            console.log({ allData });

            res.render("edit", { allData });
        } catch (error) {
            throw error;
        }
    }
    async update(req, res) {
        try {
            const data = await CrudModel.updateOne(
                {
                    _id: req.body.id,
                },
                req.body
            );
            console.log(data);
            
            if (data) {
                req.flash("success", "Update successfully!");
                return res.redirect("/list");
            } else {
                req.flash("error", "failed to update!");
            }
        } catch (error) {
            throw error;
        }
    }
    async delete(req, res) {
        try {
            const data = await CrudModel.updateOne(
                {
                    _id: req.params.id,
                },
                {
                    isDeleted: true,
                }
            );
            if (data) {
                req.flash("success", "Delete successfully!");
                return res.redirect("/");
            } else {
                req.flash("error", "failed to delete!");
            }
        } catch (error) {
            throw error
        }
    }
}
module.exports = new CrudController();
