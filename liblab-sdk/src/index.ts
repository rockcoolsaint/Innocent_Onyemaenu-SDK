import { Base } from "./base";
import { Movies } from "./movies";
import { applyMixins } from "./utils";

class OneApi extends Base {}
interface OneApi extends Movies {}

applyMixins(OneApi, [Movies]);

export default OneApi;