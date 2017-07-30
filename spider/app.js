//
var express = require('express');
//
var app = express();
var superagent = require('superagent');
//抓取
var cheerio = require('cheerio');
var url = require('url');

var eventproxy = require('eventproxy');

var async = require('async');

app.listen(3000, function(req, res) {
  console.log('app is running at port 3000');
});

var cnodeUrl = 'https://cnodejs.org/';
app.get('/', function(req, res, next) {
  superagent.get(cnodeUrl).end(function(err, sres) {
    if (err) {
      return next(err);
    }
    var $ = cheerio.load(sres.text);
    var items = [];
    $('.cell').each(function(idx, element) {
      var $element = $(element);
      var a = $element.find('span.count_of_replies').
          text().
          replace(/[\r\n]/g, '');
      if (Number(a) > 50) {
        var b = $element.find('span.count_of_visits').
            text().
            replace(/[\r\n]/g, '');
        if (Number(b) > 400) {
          items.push({
            href: $element.find('.topic_title').attr('href'),
            pic: $element.find('.last_time img').attr('src'),
            time: $element.find('.last_time span').text(),
            title: $element.find('.topic_title').attr('title'),
            comment: $element.find('span.count_of_replies').
                text().
                replace(/[\r\n]/g, ''),
            click: $element.find('span.count_of_visits').
                text().
                replace(/[\r\n]/g, ''),
          });
        } else {
          return null;
        }
      } else {
        return null;
      }
    });

    //输出数组按点击数的升序排序
    // res.send(items.sort('click').reverse());


    //通过排序，然后通过输出第一个元素，来实现输出最小点击数的对象
    // var min = items.sort('click').reverse();
    // res.send(min[0]);

    //-------------------

    // 功能：找出数组中点击次数最多的元素对象
    // 1: 遍历数组 2: 比较数组中每个元素的click 3：找出最大的click，记录它在数组中的位置
    // 4: 首先我们要在数组遍历之外的作用域定义click,位置 5：比较数组中的click，如果比Min大，就将值赋予给他

    var i = 0;
    var min = null;
    items.forEach(function(element, index) {
      // console.log(element, index)
      console.log(min, element.click)
      if (min < element.click) {
        min = element.click;
        i = index;
      }
    });
    res.send(items[i]);

    // [{click:1},{click:2},{click:3}]
    // obj
    // {
    //   name: "23",
    //   age:22
    // }
    // obj.name
    // obj['name']
    // obj[click]


    //-------------------
    //下面的东西没有学




  });
});
//
// app.get('/eventproxy', function(req, res, next) {
//   superagent.get(cnodeUrl).end(function(err, res) {
//     if (err) {
//       return console.error(err);
//     }
//     var topicUrls = [];
//     var $ = cheerio.load(res.text);
//     //
//     $('#topic_list .last_active_time').each(function(idx, element) {
//       var $element = $(element);
//
//       topicUrls.push(href);
//     });
//
//     console.log(topicUrls);
//
//     //------------------------------------------------------
//
//     //
//     var ep = new eventproxy();
//
//     //
//     ep.after('topic_html', topicUrls.length, function(topics) {
//       topics = topics.map(function(topicPair) {
//         //
//         var topicUrl = topicPair[0];
//         var topicHtml = topicPair[1];
//         var $ = cheerio.load(topicHtml);
//         return ({
//           title: $('.topic_full_title').text().trim(),
//           href: topicUrl,
//           comment1: $('.reply_content').eq(0).text().trim(),
//         });
//       });
//
//       console.log('final:');
//       console.log(topics);
//     });
//
//     topicUrls.forEach(function(topicUrl) {
//       superagent.get(topicUrl).end(function(err, res) {
//         console.log('fetch ' + topicUrl + ' successful');
//         ep.emit('topic_html', [topicUrl, res.text]);
//       });
//     });
//
//   });
// });
//
// app.get('/async', function(req, res, next) {
//   //
//   var concurrencyCount = 0;
//
//   var fetchUrl = function(url, callback) {
//     concurrencyCount++;
//     console.log('���ڵĲ�������', concurrencyCount, '������ץȡ����', url);
//     superagent.get(url).end(function(err, res) {
//       console.log('fetch ' + url + ' successful');
//       concurrencyCount++;
//       callback(null, url);
//     });
//   };
//
//   var urls = [];
//   superagent.get(cnodeUrl).end(function(err, res) {
//     if (err) {
//       return console.error(err);
//     }
//     var $ = cheerio.load(res.text);
//     // ��ȡ��ҳ���е�����
//     $('#topic_list .topic_title').each(function(idx, element) {
//       var $element = $(element);
//       //
//       var href = url.resolve(cnodeUrl, $element.attr('href'));
//       urls.push(href);
//     });
//
//     //console.log(urls);
//
//     async.mapLimit(urls, 5, function(url, callback) {
//       fetchUrl(url, callback);
//     }, function(err, result) {
//       console.log('final:');
//       console.log(result);
//     });
//   });
//
// });
//
//
