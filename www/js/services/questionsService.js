// This is a JavaScript file
app.value('questionsService',
{
    questions: [
        /*第1問目*/
        {
            "PrepText": "パソコンの中には、様々な部品が入っており、CPUやメモリ、ハードディスク、光ディスク（CD）ドライブなどがあります。CPUは処理、ハードディスクやメモリは記憶、光ディスクドライブはCDの読み出しや書き込みを行います。これらの部品によって、パーソナルコンピュータというものが出来ています。",
            "QuizText": "CPUは中央演算処理装置とも呼ばれ、パソコンの中心となる部品です。次のうち、CPUを人間の体の臓器に例えると、どの臓器になるでしょう？",
            "answer": "脳",
            "choices": ["肺", "肝臓", "心臓"],
            "comment": "CPUは、脳と同じく、処理を行う部品です。",
        },
        /*第2問目*/
        {
            "PrepText": "テレビやパソコンなど、世の中の様々な電子製品には、それを動かすためにプログラムというものが使われています。そして、そのプログラムを作ることをプログラミングといいます。",
            "QuizText": "実際にプログラミングするには、プログラム言語というものを使います。次のうち、広島商船で主に学ぶプログラム言語はどれでしょう？",
            "answer": "C言語",
            "choices": ["Python", "C++", "Ruby"],
            "comment": "C言語は、初めて学ぶプログラミング言語によく使われます。",
        },
        /*第3問目*/
        {
            "PrepText": "コンピュータなどを動かすために、二進法というものが使われています。普段私たちが使っているのは0から９の十進法というものですが、二進法は、０と１だけで数を表すもので、コンピュータの場合、信号があるかないかを判断するだけなので、回路や計算、記憶することが簡単になるという利点があります。",
            "QuizText": "例えば、十進法では、０→１→２→３→４となりますが、二進法では０と1しかないので、０→１→１０→１１→１００となります。二進法の１０はイチゼロ、１００はイチゼロゼロと読みます。次のうち、十進法で6は二進法ではどれでしょう？",
            "answer": "１１０",
            "choices": ["１０００", "１０１", "１１１"],
            "comment": "１００→１０１→１１０となります。",
        },
        /*第4問目*/
        {
            "PrepText": "私たちが普段使用しているスマートフォンやパソコンには、OSと呼ばれるものが搭載されています。OSとは、オペレーティングシステムの略で、機器の基本的な管理や制御、システム全体を管理するソフトウェアのことです。例）Microsoft社のWindows",
            "QuizText": "現在、Appleが製造しているスマートフォンであるiPhoneやタブレットであるiPadに搭載されているOSは次のうちどれでしょう？",
            "answer": "iOS",
            "choices": ["Android", "Linux", "Mac OS"],
            "comment": " ",
        },
        /*第5問目*/
        {
            "PrepText": "windowsやMacOSには、ショートカットキーというものがあります。これは、通常、コピーをするときは、右クリックをして行いますが、「Ctrlキー＋C」でコピーができるというものです。",
            "QuizText": "貼り付け（ペースト）を行うショートカットキーは次のうちどれでしょう？",
            "answer": "Ctrlキー＋V",
            "choices": ["Ctrlキー＋P", "Ctrlキー＋X", "Ctrlキー＋Z"],
            "comment": " ",
        },
    ]
});