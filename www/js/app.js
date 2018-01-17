var app = angular.module('myApp', ['onsen']);
/*トップ画面処理*/
app.controller('topCtrl', function($scope)
{
    IntervarID = setInterval(function()
    {
        $('#topclick')
            .fadeOut(1500, function()
            {
                $(this)
                    .fadeIn(1500)
            });
    }, 100);
    /*クイズ開始*/
    this.Topclick = function()
    {
        clearInterval(IntervarID);
        myNavigator.pushPage('menu.html',
        {
            animation: "slide"
        });
    }
});
app.controller('menuCtrl', function()
{
    this.QuizStart = function()
    {
        clearInterval(IntervarID);
        myNavigator.pushPage('quiz.html',
        {
            animation: "slide"
        });
    }
    this.QuizDesign = function()
    {
        clearInterval(IntervarID);
        myNavigator.pushPage('step1.html',
        {
            animation: "slide"
        });
    }
    this.QuizTry = function()
    {
        clearInterval(IntervarID);
        myNavigator.pushPage('Mquiz.html',
        {
            animation: "slide"
        });
    }
});
/*クイズ画面処理*/
app.controller('quizCtrl', function(questionsService, $scope)
{
    var me = this;
    me.items = {};
    var rightNum = 0; //正解数
    var answerNum = null; //正解番号
    var questions = null; //クイズデータ
    /*ボタン、テキストの表示・非表示*/
    $scope.QuestionText = false;
    $scope.ChoiceButton = false;
    $scope.CommentButton = false;
    $scope.PrepText = true;
    $scope.NextButton = true;
    $scope.NextQButton = false;
    /*ボタンのクラス名取得*/
    $scope.ButtonColor = function(choice)
    {
        for (i = 0; i < 4; i++)
        {
            if (i == choice)
            {
                return String("button" + (choice + 1));
            }
        }
    }
    var init = function()
        {
            me.items.currentNum = 0; //クイズ番号(最初は1問目)
            questions = JSON.parse(JSON.stringify(questionsService.questions)); //クイズデータ取得&コピー
            me.items.totalNum = questions.length; //クイズデータの問題数
            $scope.QuestionText = false;
            $scope.ChoiceButton = false;
            $scope.PrepText = true;
            $scope.NextButton = true;
            current = questions[me.items.currentNum]; //現在のクイズ
            var qLength = current.choices.length; //答え以外の選択肢数
            answerNum = Math.floor(Math.random() * (qLength + 1)); //答えの番号(ランダム)
            current.choices.splice(answerNum, 0, current.answer); //選択肢に答えを混ぜる
            me.items.current = current; //現在のクイズをデータバインド用オブジェクトに代入
        }
        //解答ボタンが押されたら
    me.getAnswer = function(ind)
    {
        $scope.QuestionText = false;
        $scope.ChoiceButton = false;
        $scope.CommentText = true;
        $scope.NextQButton = true;
        var flag = answerNum == ind; //正解か間違いか判定
        me.items.flagText = "間違い";
        me.items.flagText2 = "正解は" + me.items.current.answer + "です。";
        if (flag)
        { //正解だったら
            rightNum++; //正解数を増やす
            me.items.flagText = "正解";
            me.items.flagText2 = null;
        }
    };
    me.next = function()
    {
        $scope.QuestionText = true;
        $scope.ChoiceButton = true;
        $scope.PrepText = false;
        $scope.NextButton = false;
    };
    me.nextQ = function()
    {
        $scope.CommentText = false;
        $scope.NextQButton = false;
        if (me.items.currentNum >= me.items.totalNum - 1)
        { //全問終了したら
            myNavigator.pushPage('result.html',
            {
                totalNum: me.items.totalNum,
                rightNum: rightNum
            });
        }
        else
        {
            //まだクイズが残っていれば
            me.items.currentNum++;
            $scope.PrepText = true;
            $scope.NextButton = true;
            var current = questions[me.items.currentNum]; //現在のクイズ
            answerNum = Math.floor(Math.random() * 4); //答えの番号(ランダム)
            current.choices.splice(answerNum, 0, current.answer); //選択肢に答えを混ぜる
            me.items.current = current; //現在のクイズをデータバインド用オブジェクトに代入
        }
    };
    init();
});
/*結果画面処理*/
app.controller('resultCtrl', function()
{
    var rate = 100;
    this.items = myNavigator.getCurrentPage()
        .options;
    this.items.score = this.items.rightNum * rate;
    this.backTop = function()
    {
        myNavigator.pushPage('menu.html',
        {
            animation: "slide"
        });
    };
});
app.controller('colorCtrl', function($scope)
{
    var v1 = 0;
    var v2 = 0;
    var v3 = 0;
    var v4 = 0;
    $scope.Colorvalue = false;
    $scope.Fileshow = false;
    $scope.Colorpicker = true;
    this.Colorchange = function()
    {
        if (v1 == 1 && v2 == 1 && v3 == 1 && v4 == 1)
        {
            $scope.Fileshow = true;
            $scope.Colorpicker = false;
        }
        else
        {
            alert("選択できていないボタンカラーがあります。");
        }
    };
    this.next = function()
    {
        $scope.Fileshow = false;
        $scope.Colorvalue = true;
    };
    this.Finish = function()
    {
        myNavigator.pushPage('step2.html',
        {
            animation: "slide"
        });
    };
    $(function()
    {
        $("#Leftup")
            .on("change", function()
            {
                v1 = 1;
                $('#area1')
                    .text($('#Leftup')
                        .val());
            });
        $("#Rightup")
            .on("change", function()
            {
                v2 = 1;
                $('#area2')
                    .text($('#Rightup')
                        .val());
            });
        $("#Leftdown")
            .on("change", function()
            {
                v3 = 1;
                $('#area3')
                    .text($('#Leftdown')
                        .val());
            });
        $("#Rightdown")
            .on("change", function()
            {
                v4 = 1;
                $('#area4')
                    .text($('#Rightdown')
                        .val());
            });
    });
});
app.controller('contentCtrl', function($scope)
{
    $scope.process1 = true;
    $scope.process2 = false;
    $scope.process3 = false;
    $scope.process4 = false;
    this.next = function()
    {
        $("#image1")
            .css("display", "none");
        $scope.process1 = false;
        $scope.process2 = true;
    };
    this.next2 = function()
    {
        $scope.process2 = false;
        $scope.process3 = true;
    };
    this.next3 = function()
    {
        $scope.process3 = false;
        $scope.process4 = true;
    };
    this.next4 = function()
    {
        myNavigator.pushPage('menu.html',
        {
            animation: "slide"
        });
    };
});
app.controller('MquizCtrl', function($scope)
{
    $scope.ChoiceButton = true;
    $scope.QuestionText = true;
    var me = this;
    me.items = {};
    me.items.Questiontext = "ここに問題文を入力してね";
    var Choices = ["選択肢１", "選択肢２", "選択肢３"];
    var Answer = "答えの選択肢";
    var answerNum = Math.floor(Math.random() * 4); //答えの番号(ランダム)
    Choices.splice(answerNum, 0, Answer); //選択肢に答えを混ぜる
    me.items.Choices = Choices; //現在のクイズをデータバインド用オブジェクトに代入
    /*ボタンのクラス名取得*/
    $scope.ButtonColor = function(choice)
    {
        for (i = 0; i < 4; i++)
        {
            if (i == choice)
            {
                return String("mbutton" + (choice + 1));
            }
        }
    };
    //解答ボタンが押されたら
    me.getAnswer = function(ind)
    {
        $scope.QuestionText = false;
        $scope.ChoiceButton = false;
        $scope.CommentText = true;
        $scope.EndButton = true;
        var flag = answerNum == ind; //正解か間違いか判定
        if (!flag)
        { //正解だったら
            $("img")
                .attr("src", "batu.png");
        }
    };
    this.end = function()
    {
        location.href = "index.html"; //htmlを呼び出す(再帰処理)
    };
});