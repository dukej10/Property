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
    
    /* menor o igual precio */
    Property.ProductsSamecategory= function (price, cb){
        Property.find({
            where:{
                price:{
                    lt: price
                 }
            }
        }, cb);
    
    };

    Property.remoteMethod("ProductsSamecategory", {
        accepts: {
            arg: "price",
            type: "string"
        },
        returns: {
            arg: "properties",
            type: "array"
        },
        http: {
            path: "/get-product-same-category",
            verb: "get"

        }}
    
    
    )

    



    



};

/* 
module.exports = function(Property) {
    Property.getProductsSamecategory= function (category, cb){
        Property.find({
            where:{
                category:{
                    eq: category
                 }
            }
        }, cb);
    
    };


    Property.remoteMethod("getProductsSamecategory", {
        accepts: {
            arg: "category",
            type: "string"
        },
        returns: {
            arg: "properties",
            type: "array"
        },
        http: {
            path: "/get-product-same-category",
            verb: "get"

        }}
    
    
    )

    



};

 */