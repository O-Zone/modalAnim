$(document).ready(()=>{
    function AppViewModel() {
        this.alertClasses = ko.observable('');
        this.closeAlert = function() {
            this.alertClasses('fejlIDb alert-danger in zoomout');
        }
        this.openAlert = function() {
            this.alertClasses('fejlIDb alert-danger in');
        }
    }
    
    app = new AppViewModel();
    
    ko.applyBindings(app);

    setTimeout(() => {
        app.openAlert();
    }, 2000);

    window.app = app;
});
