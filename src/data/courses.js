const courseData = [
  {
    id: 'cs',
    title: '计算机科学',
    children: [
      {
        id: 'cs-lang',
        title: '编程语言',
        children: [
          {
            id: 'cs-lang-py',
            title: 'Python',
            children: [
              { id: 'cs-lang-py-1', title: 'Python 官方文档', url: 'https://docs.python.org/zh-cn/3/' },
              { id: 'cs-lang-py-2', title: 'Python 入门教程 (廖雪峰)', url: 'https://www.liaoxuefeng.com/wiki/1016959663602400' },
              { id: 'cs-lang-py-3', title: 'Real Python 教程', url: 'https://realpython.com/' },
            ],
          },
          {
            id: 'cs-lang-js',
            title: 'JavaScript',
            children: [
              { id: 'cs-lang-js-1', title: 'MDN Web 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript' },
              { id: 'cs-lang-js-2', title: '现代 JavaScript 教程', url: 'https://zh.javascript.info/' },
              { id: 'cs-lang-js-3', title: 'ECMAScript 规范', url: 'https://tc39.es/ecma262/' },
            ],
          },
          {
            id: 'cs-lang-cpp',
            title: 'C++',
            children: [
              { id: 'cs-lang-cpp-1', title: 'C++ Reference', url: 'https://zh.cppreference.com/' },
              { id: 'cs-lang-cpp-2', title: 'C++ Core Guidelines', url: 'https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines' },
            ],
          },
        ],
      },
      {
        id: 'cs-algo',
        title: '数据结构与算法',
        children: [
          {
            id: 'cs-algo-basic',
            title: '基础入门',
            children: [
              { id: 'cs-algo-basic-1', title: 'VisuAlgo 算法可视化', url: 'https://visualgo.net/zh' },
              { id: 'cs-algo-basic-2', title: 'LeetCode 刷题指南', url: 'https://leetcode.cn/' },
            ],
          },
          {
            id: 'cs-algo-adv',
            title: '进阶专题',
            children: [
              { id: 'cs-algo-adv-1', title: 'OI Wiki 算法竞赛知识', url: 'https://oi-wiki.org/' },
              { id: 'cs-algo-adv-2', title: 'MIT 6.006 算法导论', url: 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/' },
            ],
          },
        ],
      },
      {
        id: 'cs-os',
        title: '操作系统',
        children: [
          {
            id: 'cs-os-linux',
            title: 'Linux 基础',
            children: [
              { id: 'cs-os-linux-1', title: 'Linux 命令行教程', url: 'https://linuxcommand.org/' },
              { id: 'cs-os-linux-2', title: '鸟哥的 Linux 私房菜', url: 'https://linux.vbird.org/' },
            ],
          },
          {
            id: 'cs-os-theory',
            title: '操作系统原理',
            children: [
              { id: 'cs-os-theory-1', title: 'MIT 6.S081 操作系统工程', url: 'https://pdos.csail.mit.edu/6.S081/' },
              { id: 'cs-os-theory-2', title: 'Operating Systems: Three Easy Pieces', url: 'https://pages.cs.wisc.edu/~remzi/OSTEP/' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'math',
    title: '数学基础',
    children: [
      {
        id: 'math-la',
        title: '线性代数',
        children: [
          { id: 'math-la-1', title: '3Blue1Brown 线性代数的本质', url: 'https://www.3blue1brown.com/topics/linear-algebra' },
          { id: 'math-la-2', title: 'MIT 18.06 线性代数 (Gilbert Strang)', url: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/' },
        ],
      },
      {
        id: 'math-prob',
        title: '概率与统计',
        children: [
          { id: 'math-prob-1', title: 'Khan Academy 统计与概率', url: 'https://www.khanacademy.org/math/statistics-probability' },
          { id: 'math-prob-2', title: '哈佛 STAT 110 概率论', url: 'https://projects.iq.harvard.edu/stat110/' },
        ],
      },
      { id: 'math-calc', title: '微积分入门 (Khan Academy)', url: 'https://www.khanacademy.org/math/calculus-1' },
      { id: 'math-disc', title: '离散数学讲义 (MIT 6.042J)', url: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/' },
    ],
  },
  {
    id: 'ai',
    title: '人工智能',
    children: [
      {
        id: 'ai-ml',
        title: '机器学习',
        children: [
          {
            id: 'ai-ml-intro',
            title: '入门课程',
            children: [
              { id: 'ai-ml-intro-1', title: '吴恩达机器学习课程', url: 'https://www.coursera.org/learn/machine-learning' },
              { id: 'ai-ml-intro-2', title: '动手学深度学习 (李沐)', url: 'https://d2l.ai/' },
            ],
          },
          {
            id: 'ai-ml-adv',
            title: '进阶资源',
            children: [
              { id: 'ai-ml-adv-1', title: 'Scikit-learn 官方文档', url: 'https://scikit-learn.org/stable/' },
              { id: 'ai-ml-adv-2', title: 'Papers With Code', url: 'https://paperswithcode.com/' },
            ],
          },
        ],
      },
      {
        id: 'ai-nlp',
        title: '自然语言处理',
        children: [
          { id: 'ai-nlp-1', title: 'Hugging Face NLP Course', url: 'https://huggingface.co/learn/nlp-course' },
          { id: 'ai-nlp-2', title: '吴恩达 NLP 专项课程', url: 'https://www.coursera.org/specializations/natural-language-processing' },
        ],
      },
      {
        id: 'ai-cv',
        title: '计算机视觉',
        children: [
          { id: 'ai-cv-1', title: 'CS231n 斯坦福视觉课程', url: 'https://cs231n.github.io/' },
          { id: 'ai-cv-2', title: 'OpenCV 官方教程', url: 'https://docs.opencv.org/master/d9/df8/tutorial_root.html' },
        ],
      },
    ],
  },
  {
    id: 'physics',
    title: '物理学',
    children: [
      { id: 'physics-mech', title: '经典力学 (MIT 8.01)', url: 'https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/' },
      { id: 'physics-em', title: '电磁学 (MIT 8.02)', url: 'https://ocw.mit.edu/courses/8-02-physics-ii-electricity-and-magnetism-spring-2007/' },
      {
        id: 'physics-qm',
        title: '量子力学',
        children: [
          { id: 'physics-qm-1', title: 'MIT 8.04 量子物理 I', url: 'https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/' },
          { id: 'physics-qm-2', title: '费曼物理学讲义 (第三卷)', url: 'https://www.feynmanlectures.caltech.edu/III_toc.html' },
        ],
      },
    ],
  },
]

export default courseData
