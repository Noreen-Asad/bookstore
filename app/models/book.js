import DS from 'ember-data';

const { Model } = DS;

export default Model.extend({
    title:DS.attr("string"),
    type:DS.attr("string"),
    author:DS.attr("string")
});
