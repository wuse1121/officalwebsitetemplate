function m_over(obj) { if (obj.className == "s_out") { obj.className = "s_over"; } }
function m_out(obj) { if (obj.className == "s_over") { obj.className = "s_out"; } }
function c_chang(obj) { var e = obj.parentNode.parentNode; if (e.className == "s_over") { e.className = "s_click"; } else { e.className = "s_over"; } }
function CheckAll(form) {
    for (var i = 0; i < form.elements.length; i++) {
        var e = form.elements[i]; if (e.name != 'chkall') { e.checked = form.chkall.checked; }
        if (e.type == 'checkbox' && e.name != 'chkall' && e.name != 'chkall_box2') { var obj = e.parentNode.parentNode; e.checked ? obj.className = "s_click" : obj.className = "s_out"; }
    }
}
function getSelect(form) {
    var ids = ''; for (var i = 0; i < form.elements.length; i++) { var e = form.elements[i]; if (e.type == 'checkbox' && e.name != 'chkall' && e.name != 'chkall_box2') { if (e.checked) ids += e.value + ','; } }
    return ids.replace(/,$/mg, "");;
}
function get(id) { return document.getElementById(id); }
function show(id) { get(id).style.display = 'block'; }
function hide(id) { get(id).style.display = 'none'; }
function heightAdd(name) { style = get(name + '___Frame').style; height = parseInt(style.height); style.height = height + 100; }
function heightSub(name) { style = get(name + '___Frame').style; height = parseInt(style.height); if (height > 100) style.height = height - 100; }
function getContent(name) { return FCKeditorAPI.GetInstance(name).GetXHTML(true); }
function getEditor(name) { return FCKeditorAPI.GetInstance(name); }
function allPrpos(obj) {
    var props = ""; for (var p in obj) { if (typeof (obj[p]) == "function") { obj[p](); } else { props += p + "=" + obj[p] + "\t"; } }
    return props;
}
function child(obj) {
    obj = obj.parentNode.parentNode; var tbl = document.getElementById("listtable"); var lvl = parseInt(obj.lang); var fnd = false; for (i = 0; i < tbl.rows.length; i++) {
        var row = tbl.rows[i]; if (tbl.rows[i] == obj) { fnd = true; } else {
            var cur = parseInt(row.lang); if (fnd == true) {
                if (cur > lvl) {
                    if (cur > 1) {
                        if (row.style.display != 'none') { row.style.display = 'none'; } else
                            if (lvl > 0) { row.style.display = ''; }
                    } else { row.style.display = (row.style.display != 'none') ? 'none' : ''; }
                } else { fnd = false; }
            } else { if (cur > 0 && cur > lvl) { row.style.display = 'none'; } }
        }
    }
}
function ResumeError() { return true; }
window.onerror = ResumeError; function onloadEvent(func) { var one = window.onload; if (typeof window.onload != 'function') { window.onload = func; } else { window.onload = function () { one(); func(); } } }
function setTab(name, cursel, n) { for (i = 1; i <= n; i++) { var menu = document.getElementById(name + i); var con = document.getElementById("con_" + name + "_" + i); menu.className = i == cursel ? "hover" : ""; con.style.display = i == cursel ? "block" : "none"; } }
function setpraise(aid, hrefname, obj) {
    $.get(hrefname, { 'aid': aid }, function (data, status) {
        if (data != '') {
            data = JSON.parse(data); if (data[0] == '1') { alert("点赞成功！"); $(obj).val('取消赞'); } else { alert("取消点赞！"); $(obj).val('点赞'); }
            $(obj).next('span').html(data[1]);
        }
    });
}
function setcollect(couponid, hrefname, obj) { $.get(hrefname, { 'couponid': couponid }, function (data, status) { if (data != '') { data = JSON.parse(data); if (data == '1') { alert('收藏成功！'); $(obj).val('取消收藏'); $(obj).attr('class', 'glyphicon glyphicon-heart collection-btn   '); } else { alert('已取消收藏！'); $(obj).val('收藏'); $(obj).attr('class', 'icon-heart collection-btn'); } } }); }
function setTab(name, cursel, n) { for (i = 1; i <= n; i++) { var menu = document.getElementById(name + i); menu.className = i == cursel ? "tab-pane active" : "tab-pane"; var con = document.getElementById("con_" + name + "_" + i); con.className = i == cursel ? "active" : ""; } }
function getQueryString(name) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    let r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURIComponent(r[2]);
    }
    return null;
}