const appPath = './';
const appPathSrc = appPath + 'src/';
const appPathDist = appPath + 'dist/';
const deployPath = appPath + '../../builds/';

/*
 * Websupport specifics
 */
const linkPath = '~/hojstricova.com/web';
const sourcePath = '~/hojstricova.com/bin/hojstricova.com/builds/';

const PATHS = {
  APP: {
    dist: appPathDist,
    SASS: {
      entry: appPathSrc + 'styles/main.scss',
      src: appPathSrc + '**/*.scss',
      dest: appPathDist + 'styles/'
    },
    PAGES: {
      src: appPathSrc + '*.html',
      dest: appPathDist
    },
    ROOT: {
      src: appPathSrc + 'root/**/*.*'
    },
    IMAGES: {
      src: appPathSrc + 'images/**/*.*',
      dest: appPathDist + 'images/'
    },
    FONTS: {
      src: appPathSrc + 'fonts/**/*.*',
      dest: appPathDist + 'fonts/'
    },
    DEPLOY: {
      src: appPathDist + '**/*.*',
      dest: deployPath
    }
  }
};

export default PATHS;
