export const questionData = [
    {
        section: "Core Android Concepts",
        questions: [
            { id: 0, question: "What is Android?" },
            { id: 1, question: "What is Intent?" },
            { id: 2, question: "What is the purpose of Pending Intent?" },
            { id: 3, question: "What are the differences between Serializable and Parcelable" }
        ]
    },
    {
        section: "Application Components",
        questions: [
            { id: 4, question: "What is Context and what types of Context exist?" },
            { id: 5, question: "What is Application class?" },
            { id: 6, question: "What is the purpose of the AndroidManifest file?" }
        ]
    },
    {
        section: "Lifecycle Management",
        questions: [
            { id: 7, question: "Describe the Activity lifecycle" },
            { id: 8, question: "Describe the Fragment lifecycle" }
        ]
    },
    {
        section: "Advanced Android Topics",
        questions: [
            { id: 9, question: "What is Service?" },
            { id: 10, question: "What is BroadcastReceiver?" },
            { id: 11, question: "What is the purpose of a ContentProvider, and how does it facilitate secure data sharing between applications?" },
            { id: 12, question: "How to handle configuration changes?" }
        ]
    },
    {
        section: "Memory and Data Structures",
        questions: [
            { id: 13, question: "How Android handles memory management, and how do you avoid memory leaks?" },
            { id: 14, question: "What are the advantages of using SparseArray" }
        ]
    },
    {
        section: "Error Handling and Performance",
        questions: [
            { id: 15, question: "What are the main causes of ANR errors, and how can you prevent them from occurring?" },
            { id: 16, question: "What are do you trace exceptions?" }
        ]
    },
    {
        section: "Activity and Navigation",
        questions: [
            { id: 17, question: "How do you handle deep links?" },
            { id: 18, question: "How do you pass data between Activities or Fragments" },
            { id: 19, question: "What happens to an Activity during configuration changes?" }
        ]
    },
    {
        section: "Android Components",
        questions: [
            { id: 20, question: "What are tasks and back stack?" },
            { id: 21, question: "What's 7 purpose of Bundle?" },
            { id: 22, question: "What is ActivityManager?" }
        ]
    },
    {
        section: "Threading and Permissions",
        questions: [
            { id: 23, question: "How do you handle runtime permissions?" },
            { id: 24, question: "What are the roles of Looper, Handler, and HandlerThread?" }
        ]
    },
    {
        section: "Build Process",
        questions: [
            { id: 25, question: "What are build variants and flavors?" }
        ]
    },
    {
        section: "Core Android Concepts Continued",
        questions: [
            { id: 26, question: "How do you ensure accessibility?" },
            { id: 27, question: "What is the Android file system?" },
            { id: 28, question: "What are Android Runtime (ART), Dalvik, and Dex Compiler?" },
            { id: 29, question: "What are the differences between the APK file and the AAB file?" },
            { id: 30, question: "What is R8 optimization?" },
            { id: 31, question: "How do you reduce application sizes?" },
            { id: 32, question: "What is a process in Android applications, and how does the Android operating system manage it?" }
        ]
    },
    {
        section: "Android UI Views",
        questions: [
            { id: 33, question: "Describe the View lifecycle" },
            { id: 34, question: "What's the difference between View and ViewGroup?" },
            { id: 35, question: "Have you ever used ViewStub and how do you optimize UI performance using it?" },
            { id: 36, question: "How to implement custom views?" },
            { id: 37, question: "What is Canvas and how to utilize it?" }
        ]
    },
    {
        section: "Android UI Questions",
        questions: [
            { id: 38, question: "What is the invalidation in the View system?" },
            { id: 39, question: "What is ConstraintLayout?" },
            { id: 40, question: "When should you use SurfaceView instead of TextureView?" },
            { id: 41, question: "How does RecyclerView work internally?" },
            { id: 42, question: "What's the difference between Dp and Sp?" },
            { id: 43, question: "What is the use of a nine-patch image?" },
            { id: 44, question: "What is a Drawable, and how is it used in UI development?" },
            { id: 45, question: "What is Bitmap on Android, and how would you handle large Bitmaps efficiently?" },
            { id: 46, question: "How do you implement animations?" },
            { id: 47, question: "What is the Window?" },
            { id: 48, question: "How do you render a web page?" }
        ]
    },
    {
        section: "Jetpack Library Questions",
        questions: [
            { id: 49, question: "What is the AppCompat library?" },
            { id: 50, question: "What is the Material Design Components (MDC)?" }
        ]
    },
    {
        section: "Core Android Components",
        questions: [
            { id: 51, question: "What is the advantages of using ViewBinding?" },
            { id: 52, question: "How DataBinding works?" },
            { id: 53, question: "What is LiveData?" },
            { id: 54, question: "What is Jetpack ViewModel?" },
            { id: 55, question: "What is the Jetpack Navigation Library?" },
            { id: 56, question: "What are Dagger 2 and Hilt?" },
            { id: 57, question: "What is the Jetpack Paging library?" },
            { id: 58, question: "What is Baseline Profile?" }
        ]
    },
    {
        section: "Business Logic and Data Handling",
        questions: [
            { id: 59, question: "How would you manage long-running background tasks?" },
            { id: 60, question: "How do you serialize Json format to object" },
            { id: 61, question: "How do you handle network requests to fetch data, and which libraries or techniques do you use for efficiency and reliability?" },
            { id: 62, question: "Why is a paging system essential for loading large datasets, and how can it be implemented with RecyclerView?" }
        ]
    },
    {
        section: "Compose Fundamentals",
        questions: [
            { id: 63, question: "What is the structure of Jetpack Compose?" },
            { id: 64, question: "What are the Compose phases?" },
            { id: 65, question: "Why is Jetpack Compose a declarative UI framework?" },
            { id: 66, question: "What is recomposition, and when does it occur? Also, how does it related to the app performance?" },
            { id: 67, question: "How the composable function works internally?" },
            { id: 68, question: "What is stability in Jetpack Compose, and how does it relate to performance?" }
        ]
    },
    {
        section: "Network and Data Handling",
        questions: [
            { id: 69, question: "How do you fetch and render images from the network?" },
            { id: 70, question: "How do you store and persist data locally?" },
            { id: 71, question: "How do you handle offline-first features?" },
            { id: 72, question: "Where do you launch tasks for loading the initial data? LaunchedEffect vs. ViewModel.init()" }
        ]
    },
    {
        section: "General Compose Questions",
        questions: [
            { id: 73, question: "Have you ever had experience optimizing Compose performance by improving stabilities?" },
            { id: 74, question: "What is composition and how to create it?" },
            { id: 75, question: "What strategies are available for migrating the XML-based project to Jetpack Compose?" },
            { id: 76, question: "Why should you always test Compose performance in release mode?" },
            { id: 77, question: "What Kotlin idioms frequently used in Jetpack Compose?" }
        ]
    },
    {
        section: "Compose Runtime Questions",
        questions: [
            { id: 78, question: "What is State and which APIs are used to manage it?" },
            { id: 79, question: "What are the advantages you can take from the state hoisting?" },
            { id: 80, question: "What are the differences between remember and rememberSaveable?" },
            { id: 81, question: "How do you safely create a coroutine scope within composable functions?" },
            { id: 82, question: "How do you handle side effects inside composable functions?" }
        ]
    },
    {
        section: "Core State Management and Lifecycle",
        questions: [
            { id: 83, question: "What is the purpose of rememberUpdatedState, and how does it work?" },
            { id: 84, question: "What is the purpose of produceState, and how does it work?" },
            { id: 85, question: "What is snapshotFlow and how does it work?" },
            { id: 86, question: "What is the purpose of derivedStateOf, and how does it help optimize recomposition?" },
            { id: 87, question: "What's the lifecycle of composable functions or Composition?" },
            { id: 88, question: "What is SaveableStateHolder?" },
            { id: 89, question: "What's the purpose of the snapshot system?" },
            { id: 90, question: "What are the mutableStateListOf and mutableStateMapOf" },
            { id: 91, question: "How can you safely collect Kotlin's Flow in composable functions while preventing memory leaks?" },
            { id: 92, question: "What's the role of the CompositionLocals?" }
        ]
    },
    {
        section: "UI Building Blocks",
        questions: [
            { id: 93, question: "What's Modifier?" },
            { id: 94, question: "What is Layout?" }
        ]
    },
    {
        section: "Understanding Core Concepts",
        questions: [
            { id: 95, question: "What is Box?" },
            { id: 96, question: "What is Painter?" },
            { id: 97, question: "What is Canvas?" }
        ]
    },
    {
        section: "Layout and Positioning",
        questions: [
            { id: 98, question: "What are the differences between Arrangement and Alignment?" }
        ]
    },
    {
        section: "Image Handling",
        questions: [
            { id: 99, question: "How do you load images from the network?" }
        ]
    },
    {
        section: "Efficient Rendering and Pagination",
        questions: [
            { id: 100, question: "How can you efficiently render hundreds of items as a list in while avoiding UI jank?" },
            { id: 101, question: "How do you implement pagination with lazy lists?" }
        ]
    },
    {
        section: "Graphics Layer Modifier",
        questions: [
            { id: 102, question: "Have you ever utilized graphicsLayer Modifier?" }
        ]
    },
    {
        section: "Implementing Animations",
        questions: [
            { id: 103, question: "How do you implement visual animations in Jetpack Compose?" }
        ]
    },
    {
        section: "Screen Navigation",
        questions: [
            { id: 104, question: "How do you navigate between screens?" }
        ]
    },
    {
        section: "Preview Handling",
        questions: [
            { id: 105, question: "How preview works and how do you handle them?" }
        ]
    },
    {
        section: "Unit Testing",
        questions: [
            { id: 106, question: "How do you write unit tests for Compose UI components or screens?" }
        ]
    },
    {
        section: "Ekran Görüntüsü Testi ve UI Tutarlılığı",
        questions: [
            { id: 107, question: "What is screenshot testing, and how does it help ensure UI consistency during development?" }
        ]
    },
    {
        section: "Jetpack Compose'da Erişilebilirlik",
        questions: [
            { id: 108, question: "How do you ensure accessibility in Jetpack Compose?" }
        ]
    }
];
