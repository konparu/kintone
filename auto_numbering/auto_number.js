(function() {
    "use strict";
    var events = [
        'app.record.create.submit',
        'app.record.edit.submit'
    ];
    kintone.events.on(events, function(event) {
        var record = event.record;
        // receiptsテーブルのno欄を自動採番する
        var count = record.receipts.value.length;
        for( var i = 0; i < count; i++ ){
            record.receipts.value[i].value.no.value = i + 1;
        }

        return event;
    });
})();
