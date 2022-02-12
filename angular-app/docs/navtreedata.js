/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "milupHPC", "index.html", [
    [ "Miluphcuda", "index.html", null ],
    [ "milupHPC", "md__r_e_a_d_m_e.html", [
      [ "Usage", "md__r_e_a_d_m_e.html#autotoc_md1", [
        [ "Relevant preprocessor directives", "md__r_e_a_d_m_e.html#autotoc_md2", null ],
        [ "Config file settings", "md__r_e_a_d_m_e.html#autotoc_md3", null ],
        [ "Command line arguments", "md__r_e_a_d_m_e.html#autotoc_md4", null ]
      ] ],
      [ "Test cases", "md__r_e_a_d_m_e.html#autotoc_md5", [
        [ "Kepler", "md__r_e_a_d_m_e.html#autotoc_md6", null ],
        [ "Plummer", "md__r_e_a_d_m_e.html#autotoc_md7", null ],
        [ "Sedov", "md__r_e_a_d_m_e.html#autotoc_md8", null ],
        [ "Boss-Bodenheimer: isothermal collapse", "md__r_e_a_d_m_e.html#autotoc_md9", null ]
      ] ],
      [ "Implementation", "md__r_e_a_d_m_e.html#autotoc_md10", [
        [ "Multi-CPU version", "md__r_e_a_d_m_e.html#autotoc_md11", null ],
        [ "Single-GPU implementation", "md__r_e_a_d_m_e.html#autotoc_md12", [
          [ "Miluphcuda", "md__r_e_a_d_m_e.html#autotoc_md13", null ],
          [ "An Efficient CUDA Implementation of the Tree-Based Barnes Hut n-Body Algorithm", "md__r_e_a_d_m_e.html#autotoc_md14", null ],
          [ "Mapping Barnes Hut algoirthm to GPU kernels", "md__r_e_a_d_m_e.html#autotoc_md15", [
            [ "Global optimzations", "md__r_e_a_d_m_e.html#autotoc_md16", null ],
            [ "Kernel 1: computes bounding box around all bodies", "md__r_e_a_d_m_e.html#autotoc_md17", null ],
            [ "Kernel 2: hierachically subdivides the root cells", "md__r_e_a_d_m_e.html#autotoc_md18", null ],
            [ "Kernel 3: computes the COM for each cell", "md__r_e_a_d_m_e.html#autotoc_md19", null ],
            [ "Kernel 4: sorts the bodies", "md__r_e_a_d_m_e.html#autotoc_md20", null ],
            [ "Kernel 5: computes the forces", "md__r_e_a_d_m_e.html#autotoc_md21", null ],
            [ "Kernel 6: updates the bodies", "md__r_e_a_d_m_e.html#autotoc_md22", null ]
          ] ]
        ] ]
      ] ]
    ] ],
    [ "Minimal test for CUDA aware MPI", "md_binac__minimal_test_cuda_m_p_i__r_e_a_d_m_e.html", null ],
    [ "Binac", "md_binac__notes.html", [
      [ "Links", "md_binac__notes.html#autotoc_md25", null ],
      [ "Accessing", "md_binac__notes.html#autotoc_md26", null ],
      [ "Compiling", "md_binac__notes.html#autotoc_md27", [
        [ "Modules", "md_binac__notes.html#autotoc_md28", null ],
        [ "Linking", "md_binac__notes.html#autotoc_md29", null ],
        [ "Batch job", "md_binac__notes.html#autotoc_md30", null ]
      ] ]
    ] ],
    [ "Concepts", "md__concepts.html", null ],
    [ "This is a extra Markdown file", "md_doc__extra_markdown.html", [
      [ "Whatever", "md_doc__extra_markdown.html#autotoc_md35", null ]
    ] ],
    [ "Concepts", "md_documents__concepts.html", null ],
    [ "Cuda Optimizations", "md_documents__cuda_optimizations.html", [
      [ "Generally", "md_documents__cuda_optimizations.html#autotoc_md48", null ],
      [ "Temporary variables", "md_documents__cuda_optimizations.html#autotoc_md49", null ],
      [ "Coalesced access", "md_documents__cuda_optimizations.html#autotoc_md50", null ],
      [ "Prefetching data", "md_documents__cuda_optimizations.html#autotoc_md51", null ],
      [ "Unrolling", "md_documents__cuda_optimizations.html#autotoc_md52", null ],
      [ "Shared/Tiled memory", "md_documents__cuda_optimizations.html#autotoc_md53", null ]
    ] ],
    [ "HeunNotes", "md_documents__heun_notes.html", null ],
    [ "Integrator", "md_documents__integrator.html", [
      [ "Problem/Challenge", "md_documents__integrator.html#autotoc_md55", [
        [ "Possible solutions", "md_documents__integrator.html#autotoc_md56", [
          [ "Not assigning to correct process", "md_documents__integrator.html#autotoc_md57", null ],
          [ "<em>Brute-Force</em>", "md_documents__integrator.html#autotoc_md58", null ]
        ] ]
      ] ],
      [ "Solutions/Approaches to target challenges", "md_documents__integrator.html#autotoc_md59", [
        [ "Decouple gravity and do not assign to correct process within substeps", "md_documents__integrator.html#autotoc_md60", [
          [ "Problems", "md_documents__integrator.html#autotoc_md61", null ],
          [ "Possible solutions", "md_documents__integrator.html#autotoc_md62", null ]
        ] ]
      ] ],
      [ "Different Smoothing lengths", "md_documents__integrator.html#autotoc_md63", null ]
    ] ],
    [ "Licence", "md_documents__licence.html", [
      [ "Used submodules/libraries", "md_documents__licence.html#autotoc_md65", null ]
    ] ],
    [ "CMake", "md_documents__markdown_unsorted__c_make_introduction.html", [
      [ "Links", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md67", [
        [ "Documentation", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md68", null ],
        [ "Tutorials, Guides & Instructions", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md69", null ],
        [ "Videos", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md70", null ]
      ] ],
      [ "Usage", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md71", [
        [ "Command line tools & Interactive Dialogs", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md72", [
          [ "cmake", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md73", null ],
          [ "ctest", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md74", null ],
          [ "cpack", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md75", null ],
          [ "ccmake", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md76", null ],
          [ "cmake-gui", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md77", null ]
        ] ]
      ] ],
      [ "Basics", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md78", [
        [ "CMake Version", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md79", null ],
        [ "VARIABLES", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md80", null ],
        [ "PROPERTIES", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md81", null ],
        [ "Output folders", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md82", null ],
        [ "Sources", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md83", null ],
        [ "Executables & targets", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md84", null ],
        [ "PROGRAMMING IN CMAKE", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md85", [
          [ "Control flow", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md86", null ],
          [ "Loops", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md87", null ],
          [ "Generator expression", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md88", null ],
          [ "Functions (& macros)", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md89", null ]
        ] ],
        [ "COMMUNICATION WITH CODE", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md90", [
          [ "Configure File", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md91", null ],
          [ "Reading files", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md92", null ]
        ] ],
        [ "RUNNING OTHER PROGRAMS", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md93", [
          [ "command at configure time", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md94", null ],
          [ "command at build time", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md95", null ]
        ] ]
      ] ],
      [ "Libraries", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md96", null ],
      [ "Policies", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md97", null ],
      [ "Language/Package related", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md98", [
        [ "C", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md99", null ],
        [ "C++", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md100", null ],
        [ "CUDA", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md101", [
          [ "Enable Cuda support", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md102", null ],
          [ "CUDA Variables", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md103", null ],
          [ "Adding libraries / executables", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md104", null ],
          [ "Architecture", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md105", null ],
          [ "Working with targets", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md106", null ],
          [ "Useful variables", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md107", null ]
        ] ],
        [ "OpenMP", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md108", [
          [ "Enable OpenMP support", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md109", null ]
        ] ],
        [ "Boost", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md110", null ],
        [ "MPI", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md111", [
          [ "Enable MPI support", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md112", null ]
        ] ]
      ] ],
      [ "Adding features", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md113", [
        [ "Set default build type", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md114", null ],
        [ "Meta compiler features", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md115", null ],
        [ "Position independent code (-fPIC)", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md116", null ],
        [ "Little libraries", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md117", null ],
        [ "Modules", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md118", [
          [ "CMakeDependentOption", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md119", null ],
          [ "CMakePrintHelpers", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md120", null ],
          [ "CheckCXXCompilerFlag", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md121", null ],
          [ "WriteCompilerDetectionHeader", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md122", null ],
          [ "try_compile / try_run", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md123", null ]
        ] ]
      ] ],
      [ "Debugging", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md124", [
        [ "Printing variables", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md125", null ],
        [ "Tracing a run", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md126", null ]
      ] ],
      [ "Including projects", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md127", [
        [ "Fetch", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md128", null ]
      ] ],
      [ "Testing", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md129", [
        [ "General", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md130", null ],
        [ "Building as part of the test", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md131", null ],
        [ "Testing frameworks", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md132", [
          [ "GoogleTest", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md133", null ],
          [ "Catch2", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md134", null ],
          [ "DocTest", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md135", null ]
        ] ]
      ] ],
      [ "Exporting and Installing", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md136", [
        [ "Installing", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md137", null ],
        [ "Exporting", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md138", null ],
        [ "Packaging", "md_documents__markdown_unsorted__c_make_introduction.html#autotoc_md139", null ]
      ] ]
    ] ],
    [ "GNU Debuger GDB", "md_documents__markdown_unsorted__g_d_b__debugger.html", [
      [ "Functionality", "md_documents__markdown_unsorted__g_d_b__debugger.html#autotoc_md141", [
        [ "Usage", "md_documents__markdown_unsorted__g_d_b__debugger.html#autotoc_md142", [
          [ "Startup", "md_documents__markdown_unsorted__g_d_b__debugger.html#autotoc_md143", null ],
          [ "Help", "md_documents__markdown_unsorted__g_d_b__debugger.html#autotoc_md144", null ],
          [ "Running the program", "md_documents__markdown_unsorted__g_d_b__debugger.html#autotoc_md145", null ],
          [ "Breakpoints", "md_documents__markdown_unsorted__g_d_b__debugger.html#autotoc_md146", null ],
          [ "Stack backtrace", "md_documents__markdown_unsorted__g_d_b__debugger.html#autotoc_md147", null ],
          [ "Browsing source", "md_documents__markdown_unsorted__g_d_b__debugger.html#autotoc_md148", null ],
          [ "Browsing Data", "md_documents__markdown_unsorted__g_d_b__debugger.html#autotoc_md149", null ],
          [ "Object File manipulation", "md_documents__markdown_unsorted__g_d_b__debugger.html#autotoc_md150", null ],
          [ "Signal Control", "md_documents__markdown_unsorted__g_d_b__debugger.html#autotoc_md151", null ],
          [ "Machine-level Debug", "md_documents__markdown_unsorted__g_d_b__debugger.html#autotoc_md152", null ],
          [ "History Display", "md_documents__markdown_unsorted__g_d_b__debugger.html#autotoc_md153", null ],
          [ "Miscellaneous", "md_documents__markdown_unsorted__g_d_b__debugger.html#autotoc_md154", null ]
        ] ]
      ] ]
    ] ],
    [ "Efficient implementation of a Quadtree (for 2D collision detection)", "md_documents__markdown_unsorted__implementation_quadtree.html", [
      [ "Other possibility (than using Quadtrees)", "md_documents__markdown_unsorted__implementation_quadtree.html#autotoc_md156", null ],
      [ "Fundamentals of Quadtrees", "md_documents__markdown_unsorted__implementation_quadtree.html#autotoc_md157", null ],
      [ "Implemenation in C", "md_documents__markdown_unsorted__implementation_quadtree.html#autotoc_md158", null ],
      [ "Possible improvements regarding Implementations of Quadtrees", "md_documents__markdown_unsorted__implementation_quadtree.html#autotoc_md159", [
        [ "Node representation", "md_documents__markdown_unsorted__implementation_quadtree.html#autotoc_md160", null ],
        [ "Traversel", "md_documents__markdown_unsorted__implementation_quadtree.html#autotoc_md161", null ],
        [ "Contiguous children", "md_documents__markdown_unsorted__implementation_quadtree.html#autotoc_md162", null ],
        [ "Deferred cleaning", "md_documents__markdown_unsorted__implementation_quadtree.html#autotoc_md163", null ],
        [ "Moving elements", "md_documents__markdown_unsorted__implementation_quadtree.html#autotoc_md164", null ],
        [ "Singly-Linked Index Lists for Elements", "md_documents__markdown_unsorted__implementation_quadtree.html#autotoc_md165", null ],
        [ "Tree representation", "md_documents__markdown_unsorted__implementation_quadtree.html#autotoc_md166", [
          [ "FreeList<T>", "md_documents__markdown_unsorted__implementation_quadtree.html#autotoc_md167", null ],
          [ "Maximum tree depth", "md_documents__markdown_unsorted__implementation_quadtree.html#autotoc_md168", null ],
          [ "Queries", "md_documents__markdown_unsorted__implementation_quadtree.html#autotoc_md169", null ]
        ] ]
      ] ],
      [ "Things to avoid", "md_documents__markdown_unsorted__implementation_quadtree.html#autotoc_md170", [
        [ "Full-blown containers", "md_documents__markdown_unsorted__implementation_quadtree.html#autotoc_md171", null ]
      ] ],
      [ "Loose quadtree", "md_documents__markdown_unsorted__implementation_quadtree.html#autotoc_md172", null ]
    ] ],
    [ "LLDB Debugger", "md_documents__markdown_unsorted__l_l_d_b__debugger.html", [
      [ "LLVM project", "md_documents__markdown_unsorted__l_l_d_b__debugger.html#autotoc_md174", [
        [ "Primary subprojects", "md_documents__markdown_unsorted__l_l_d_b__debugger.html#autotoc_md175", null ]
      ] ],
      [ "Functionality", "md_documents__markdown_unsorted__l_l_d_b__debugger.html#autotoc_md176", [
        [ "Usage", "md_documents__markdown_unsorted__l_l_d_b__debugger.html#autotoc_md177", [
          [ "Print out", "md_documents__markdown_unsorted__l_l_d_b__debugger.html#autotoc_md178", null ]
        ] ],
        [ "Breakpoints", "md_documents__markdown_unsorted__l_l_d_b__debugger.html#autotoc_md179", null ]
      ] ]
    ] ],
    [ "Meeting 2021-01-14", "md_documents__markdown_unsorted__master.html", [
      [ "Done/In progress", "md_documents__markdown_unsorted__master.html#autotoc_md181", null ],
      [ "Next steps", "md_documents__markdown_unsorted__master.html#autotoc_md182", null ]
    ] ],
    [ "Miluphcuda NNS", "md_documents__markdown_unsorted__miluphcuda_n_n_s.html", [
      [ "tree.cu", "md_documents__markdown_unsorted__miluphcuda_n_n_s.html#autotoc_md184", [
        [ "tree.h", "md_documents__markdown_unsorted__miluphcuda_n_n_s.html#autotoc_md185", null ]
      ] ]
    ] ],
    [ "terminal_hotkeys", "md_documents__markdown_unsorted_terminal_hotkeys.html", null ],
    [ "Notes", "md_documents__notes.html", [
      [ "N-Body & SPH", "md_documents__notes.html#autotoc_md187", null ],
      [ "TODO", "md_documents__notes.html#autotoc_md188", [
        [ "Ideas", "md_documents__notes.html#autotoc_md189", null ],
        [ "Problems, Challenges, Improvements, ...", "md_documents__notes.html#autotoc_md190", null ]
      ] ],
      [ "Generalizing functions/functionality", "md_documents__notes.html#autotoc_md191", null ],
      [ "Buffers", "md_documents__notes.html#autotoc_md192", null ]
    ] ],
    [ "regexp", "md_documents_regexp.html", null ],
    [ "Postprocessing", "md_postprocessing__r_e_a_d_m_e.html", [
      [ "Content", "md_postprocessing__r_e_a_d_m_e.html#autotoc_md194", [
        [ "<a href=\"VisualizeDistribution.py\" >VisualizeDistribution.py</a>", "md_postprocessing__r_e_a_d_m_e.html#autotoc_md195", null ],
        [ "<a href=\"VisualizeDomains_2D.py\" >VisualizeDomains_2D.py</a>", "md_postprocessing__r_e_a_d_m_e.html#autotoc_md196", null ],
        [ "<a href=\"VisualizeDomains_3D.py\" >VisualizeDomains_3D.py</a>", "md_postprocessing__r_e_a_d_m_e.html#autotoc_md197", null ]
      ] ]
    ] ],
    [ "Miluphcuda", "md_resources_miluphcuda__miluphcuda.html", [
      [ "Project structure", "md_resources_miluphcuda__miluphcuda.html#autotoc_md199", null ],
      [ "Settings", "md_resources_miluphcuda__miluphcuda.html#autotoc_md200", [
        [ "Preprocessor directives", "md_resources_miluphcuda__miluphcuda.html#autotoc_md201", null ]
      ] ],
      [ "Kernels", "md_resources_miluphcuda__miluphcuda.html#autotoc_md202", null ],
      [ "Integrators", "md_resources_miluphcuda__miluphcuda.html#autotoc_md203", null ],
      [ "Physics", "md_resources_miluphcuda__miluphcuda.html#autotoc_md204", [
        [ "Equation of states", "md_resources_miluphcuda__miluphcuda.html#autotoc_md205", null ]
      ] ]
    ] ],
    [ "Features of miluphcuda and their importance/priority", "md_resources_miluphcuda_physics_in_miluphcuda.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", "namespacemembers_dup" ],
        [ "Functions", "namespacemembers_func.html", "namespacemembers_func" ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Related Functions", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Functions", "globals_func.html", null ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"_config_parser_8cpp.html",
"class_h5_profiler.html#a1fe97bb27f8a16ab57239ff8b27c7314",
"class_particle_handler.html#a061362bdbacc08b275450087ec9df50a",
"class_simulation_time.html#aed27092e4e6362966d55530182936e26",
"classcxxopts_1_1_option_exception.html#a9b53b66ca94838f8d1d696fad2576f3e",
"classcxxopts_1_1_parse_result.html#a5318ab694406c1456654ebf7bd2917e3",
"classcxxopts_1_1values_1_1abstract__value.html#a578211778e2d3a3eb5c9f9a57b5b9cd1",
"cuda__utilities_8cu.html#ad71b91fd0e24f3e7ac864f9472f701d0",
"gravity_8cu.html#afe9543ee9b2e06c705b1a087b3f6b94a",
"kernels_8cu.html#a5a831162c0e7e232891552f032c6285c",
"md_documents__markdown_unsorted__l_l_d_b__debugger.html#autotoc_md175",
"namespace_integrated_particles_n_s_1_1_kernel.html#abeddfa533653fcf16afe1bd71c002603",
"namespace_sub_domain_key_tree_n_s_1_1_kernel_1_1_launch.html#af49cdcf49317e5d105d7b4b04d85db36",
"particles_8cuh.html#aae89a2220ce0948274041eeadb4b23b1",
"struct_reduction.html",
"subdomain_8cuh.html#af49cdcf49317e5d105d7b4b04d85db36"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';