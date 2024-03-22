// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//Question: how do we know that 'category_id' is the right forgeign key?

// TODO: Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});
// TODO: Categories have many Products
Category.hasMany(Product, {
  foreignKey:'category_id',
  onDelete: 'CASCADE',
});

// TODO: Products belongToMany Tags (through ProductTag)
//TODO: figure out if this is the right foriegn key.
Product.belongsToMany(Tag, {
  foreignKey: 'product_tag',
  onDelete: 'CASCADE',
});
// TODO: Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  foreignKey: 'product_tag',
  onDelete: 'CASCADE',

});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
