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
        
        // "レコード名" に 作成者 & "_" & 対象年月 の値を入れる
        // フィールドの自動計算ではうまくできなかったためJSで実施する
        record.レコード名.value = record.対象年月.value + "_" + record.作成者.value.name;
        
        return event;
    });
    
    // レコード名は、表示する必要がないため非表示にする
    var showEvents = [
        'app.record.detail.show',
        'app.record.create.show',
        'app.record.edit.show',
    ];
    
    kintone.events.on(showEvents, function(event){
       var record = event.record;
       kintone.app.record.setFieldShown('レコード名', false); 
    });
})();