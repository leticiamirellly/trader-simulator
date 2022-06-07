import { useToast } from "vue-toastification";

export default {
  install(Vue, options) {
    const toast = useToast();

    function notifySuccess(message) {
      toast.success(message);
    }

    function notifyError(message) {
      toast.error(message);
    }
    Vue.config.globalProperties.$notifySuccess = notifySuccess;
    Vue.config.globalProperties.$notifyError = notifyError;
    Vue.provide('notifySuccess', notifySuccess);
    Vue.provide('notifyError', notifyError);
  },
};
