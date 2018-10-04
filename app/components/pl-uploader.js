import PlUploader from 'ember-cli-plupload/components/pl-uploader';
import config from '../config/environment';

export default PlUploader.extend({
  BASE_URL: config.PLUPLOAD_BASE_URL || '/assets/'
});
