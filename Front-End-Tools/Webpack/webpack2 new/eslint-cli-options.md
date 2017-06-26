# eslint cli options


```sh





eslint [options] file.js [file.js] [dir]

Basic configuration:
  -c, --config path::String    Use configuration from this file or shareable config
  --no-eslintrc                Disable use of configuration from .eslintrc
  --env [String]               Specify environments
  --ext [String]               Specify JavaScript file extensions - default: .js
  --global [String]            Define global variables
  --parser String              Specify the parser to be used
  --parser-options Object      Specify parser options

Caching:
  --cache                      Only check changed files - default: false
  --cache-file path::String    Path to the cache file. Deprecated: use --cache-location - default: .eslintcache
  --cache-location path::String  Path to the cache file or directory

Specifying rules and plugins:
  --rulesdir [path::String]    Use additional rules from this directory
  --plugin [String]            Specify plugins
  --rule Object                Specify rules

Ignoring files:
  --ignore-path path::String   Specify path of ignore file
  --no-ignore                  Disable use of ignore files and patterns
  --ignore-pattern [String]    Pattern of files to ignore (in addition to those in .eslintignore)

Using stdin:
  --stdin                      Lint code provided on <STDIN> - default: false
  --stdin-filename String      Specify filename to process STDIN as

Handling warnings:
  --quiet                      Report errors only - default: false
  --max-warnings Int           Number of warnings to trigger nonzero exit code - default: -1

Output:
  -o, --output-file path::String  Specify file to write report to
  -f, --format String          Use a specific output format - default: stylish
  --color, --no-color          Force enabling/disabling of color

Miscellaneous:
    --init                       Run config initialization wizard - default: false
    --fix                        Automatically fix problems
    --debug                      Output debugging information
    -h, --help                   Show help
    -v, --version                Output the version number
    --no-inline-config           Prevent comments from changing config or rules
    --print-config path::String  Print the configuration for the given file









```




```sh

G:\wwwRoot\learning\Front-End-Tools\Webpack\webpack2 new>eslint -h
eslint [options] file.js [file.js] [dir]

Basic configuration:
  -c, --config path::String    Use configuration from this file or shareable config
  --no-eslintrc                Disable use of configuration from .eslintrc
  --env [String]               Specify environments
  --ext [String]               Specify JavaScript file extensions - default: .js
  --global [String]            Define global variables
  --parser String              Specify the parser to be used
  --parser-options Object      Specify parser options

Caching:
  --cache                      Only check changed files - default: false
  --cache-file path::String    Path to the cache file. Deprecated: use --cache-location - default:
                               .eslintcache
  --cache-location path::String  Path to the cache file or directory

Specifying rules and plugins:
  --rulesdir [path::String]    Use additional rules from this directory
  --plugin [String]            Specify plugins
  --rule Object                Specify rules

Ignoring files:
  --ignore-path path::String   Specify path of ignore file
  --no-ignore                  Disable use of ignore files and patterns
  --ignore-pattern [String]    Pattern of files to ignore (in addition to those in .eslintignore)

Using stdin:
  --stdin                      Lint code provided on <STDIN> - default: false
  --stdin-filename String      Specify filename to process STDIN as

Handling warnings:
  --quiet                      Report errors only - default: false
  --max-warnings Int           Number of warnings to trigger nonzero exit code - default: -1

Output:
  -o, --output-file path::String  Specify file to write report to
  -f, --format String          Use a specific output format - default: stylish
  --color, --no-color          Force enabling/disabling of color

Miscellaneous:
  --init                       Run config initialization wizard - default: false
  --fix                        Automatically fix problems
  --debug                      Output debugging information
  -h, --help                   Show help
  -v, --version                Output the version number
  --no-inline-config           Prevent comments from changing config or rules
  --print-config path::String  Print the configuration for the given file

G:\wwwRoot\learning\Front-End-Tools\Webpack\webpack2 new>

```











