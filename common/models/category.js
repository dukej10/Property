'use strict';

module.exports = function(Category) {
    Category.getCategorySameName= function (name, cb){
        Category.find({
            where:{
                name:{
                    eq: name
                 }
            }
        }, cb);
    
    };


    Category.remoteMethod("getCategorySameName", {
        accepts: {
            arg: "name",
            type: "string"
        },
        returns: {
            arg: "Categories",
            type: "array"
        },
        http: {
            path: "/get-category-same-name",
            verb: "get"

        }}
    
    
    )

    Category.getCategorySameTrequest= function (trequest, cb){
        Category.find({
            where:{
                trequest:{
                    eq: trequest
                    }
            }
        }, cb);
    
    };
    
    /* Por tsolicitud venta o alquiler */
    Category.remoteMethod("getCategorySameTrequest", {
        accepts: {
            arg: "trequest",
            type: "string"
        },
        returns: {
            arg: "Categories",
            type: "array"
        },
        http: {
            path: "/get-category-same-trequest",
            verb: "get"
    
        }}
    
    
    )

    Category.sendEmail = (emailAddresses, subject, message, cb) => {
        Category.app.models.Email.send({
            to: emailAddresses,
            from: "Company",
            subject: subject,
            text: message,
            html: message
        }, function (err, mail){
            console.log("correo enviado");
            if (err) return err;
        });
        cb(null, 'message sent: ' + message);
    }
    
    Category.remoteMethod('sendEmail',{
        http: {
            path: '/sendEmail',
            verb: 'get'
        },
        description: [
            "Api to send email messages."
        ],
        accepts: [
            {
               arg: 'message',
               type: 'string',
               required: true 
            },
            {
                arg: 'subject',
                type: 'string',
                required: true 
            },
            {
                arg: 'emailAddresses',
                type: 'string',
                required: true 
            }
        ],
        returns: { arg: 'response', type: 'string' }
    });

};

/* module1.exports = function(Category) {
Category.getCategorySameTrequest= function (trequest, cb){
    Category.find({
        where:{
            trequest:{
                eq: trequest
                }
        }
    }, cb);

};a


Category.remoteMethod1("getCategorySameTrequest", {
    accepts: {
        arg: "trequest",
        type: "string"
    },
    returns: {
        arg: "Categories",
        type: "array"
    },
    http: {
        path: "/get-category-same-trequest",
        verb: "get"

    }}


)

};




 */