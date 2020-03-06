'use strict';

module.exports = function(Property) {
    Property.getProductsSameAvailable= function (available, cb){
        Property.find({
            where:{
                available:{
                    eq: available
                 }
            }
        }, cb);
    
    };


    Property.remoteMethod("getProductsSameAvailable", {
        accepts: {
            arg: "available",
            type: "boolean"
        },
        returns: {
            arg: "properties",
            type: "array"
        },
        http: {
            path: "/get-product-same-available",
            verb: "get"

        }}
    
    
    )


};
