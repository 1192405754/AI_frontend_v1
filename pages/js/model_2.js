$('#demo-1').fdatepicker();

var nowTemp = new Date();
var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
var checkin = $('#dpd1').fdatepicker({
    onRender: function (date) {
        return date.valueOf() < now.valueOf() ? 'disabled' : '';
    }
}).on('changeDate', function (ev) {
    if (ev.date.valueOf() > checkout.date.valueOf()) {
        var newDate = new Date(ev.date)
        newDate.setDate(newDate.getDate() + 1);
        checkout.update(newDate);
    }
    checkin.hide();
    $('#dpd2')[0].focus();
}).data('datepicker');
var checkout = $('#dpd2').fdatepicker({
    onRender: function (date) {
        return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
    }
}).on('changeDate', function (ev) {
    checkout.hide();
}).data('datepicker');


document.getElementById('file-upload').addEventListener('change', function (event) {
    const allowedExtensions = ['.xls', '.xlsx', '.csv'];
    const fileInput = event.target;
    const file = fileInput.files[0];
    const fileExtension = file.name.slice(file.name.lastIndexOf('.')).toLowerCase();

    const errorNotification = document.getElementById('error-notification');
    const successNotification = document.getElementById('success-notification');

    function hideNotification(notification) {
        setTimeout(function () {
            notification.style.display = 'none';
        }, 5000); // 5000毫秒（5秒）后隐藏提示
    }

    if (!allowedExtensions.includes(fileExtension)) {
        errorNotification.style.display = 'block';
        successNotification.style.display = 'none';
        fileInput.value = null; // 清空输入框，以免用户再次选择相同的不合法文件时不触发 change 事件
        hideNotification(errorNotification);
    } else {
        errorNotification.style.display = 'none';
        successNotification.innerHTML = file.name + ' 上传成功！'; // 在上传成功消息前面加上文件的名称和格式
        successNotification.style.display = 'block';
        hideNotification(successNotification);
    }
});

// 左侧模型启动按钮script函数实现
$(document).ready(function () {
    $("#run-model").click(function () {
        window.location.href = "templates/new_html_one.html";
    });
});

// 获取文本框和确认按钮的引用
const urlInput = document.getElementById('url-input');
const confirmBtn = document.getElementById('confirm-btn');

// 当确认按钮被点击时执行的函数
confirmBtn.addEventListener('click', () => {
    // 获取用户输入的 URL
    const url = urlInput.value;

    // 使用正则表达式检测 URL 是否合法
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    if (!urlRegex.test(url)) {
        alert('请输入正确的 URL！');
        return;
    }

    // 输出 URL
    const urlOutput = document.getElementById('url-output');
    urlOutput.innerText = `您输入的 URL 是：${url}`;
    urlOutput.style.color = '#4caf50'; // 设置文本颜色
    urlOutput.style.fontWeight = 'bold'; // 设置字体粗细
    urlOutput.style.fontSize = '24px'; // 设置字体大小
    urlOutput.style.fontFamily = 'Arial, sans-serif'; // 设置字体样式
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("run-model_URL").addEventListener("click", function () {
        const url = urlInput.value;

        // 使用正则表达式检测 URL 是否合法
        const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
        if (!urlRegex.test(url)) {
            alert('请输入正确的 URL！');
            return;
        }
        const inputText = document.getElementById("url-input").value;

        // 显示加载动画
        document.getElementById("loading-animation").style.display = "block";

        // 延迟几秒钟后跳转到新页面
        setTimeout(function () {
            window.location.href = "new_page_function_2.html?input=" + encodeURIComponent(inputText);
        }, 1000); // 设置延迟时间，这里设置为 1000 毫秒（1秒）
    });
});

function resizeVideoBackground() {
    var video = document.getElementById("video-background");
    var videoWidth = video.videoWidth;
    var videoHeight = video.videoHeight;
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var windowRatio = windowWidth / windowHeight;
    var videoRatio = videoWidth / videoHeight;

    if (windowRatio < videoRatio) {
        video.style.height = windowHeight + "px";
        video.style.width = (windowHeight * videoRatio) + "px";
    } else {
        video.style.width = windowWidth + "px";
        video.style.height = (windowWidth / videoRatio) + "px";
    }
}

window.addEventListener("resize", resizeVideoBackground);
resizeVideoBackground();

// 获取上传文件的input元素
var fileInput = document.getElementById('file-upload');

// 监听文件上传事件
fileInput.addEventListener('change', function () {
    var file = fileInput.files[0];

    // 创建一个FileReader对象，用于读取文件内容
    var reader = new FileReader();

    // 监听文件读取完成事件
    reader.addEventListener('load', function () {
        var data = reader.result;

        // 使用第三方库js-xlsx读取excel文件内容
        var workbook = XLSX.read(data, {type: 'binary'});
        var sheet = workbook.Sheets[workbook.SheetNames[0]];
        var json = XLSX.utils.sheet_to_json(sheet);

        // 创建一个表格元素
        var table = document.createElement('table');
        table.classList.add('excel-table');

        // 创建表头行
        var headerRow = table.insertRow();
        for (var key in json[0]) {
            var th = document.createElement('th');
            th.textContent = key;
            headerRow.appendChild(th);
        }

        // 创建数据行
        for (var i = 0; i < json.length; i++) {
            var row = table.insertRow();
            for (var key in json[i]) {
                var cell = row.insertCell();
                cell.textContent = json[i][key];
            }
        }

        // 插入表格到页面中
        var tableContainer = document.getElementById('table-container');
        tableContainer.innerHTML = '';
        tableContainer.appendChild(table);
    });

    // 读取文件内容
    reader.readAsBinaryString(file);
});


