import Serializer from './application';

 export default Serializer.extend({
  embed: true,
  include: ['book']
 });