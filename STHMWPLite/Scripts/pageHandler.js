jQuery(document).ready(function ($) {
    $(document).pjax("#navigateToHome", "#pageContent", { push: false });
    $(document).pjax("#navigateToIndex", "#pageContent", { push: false });
    $(document).pjax("#navigateToSensors", "#pageContent", { push: false });
    $(document).pjax("#navigateToEvents", "#pageContent", { push: false });
    $(document).pjax("#navigateToSettings", "#pageContent", { push: false });
    $(document).pjax("#navigateToDebug", "#pageContent", { push: false });
});