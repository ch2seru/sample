package sample.tomcat.ex02.pyrmont;

import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.net.URLClassLoader;
import java.net.URLStreamHandler;

/**
 * Subject :
 * User: ch2seru
 * Date: 12. 8. 19
 */
public class ServletProcessor1 {
    public void process(Request request, Response response){
        String uri = request.getUri();
        String servletName = uri.substring(uri.lastIndexOf("/")+1);
        URLClassLoader loader = null;

        try{
            URL[] urls = new URL[1];
            URLStreamHandler streamHandler = null;
            File classPath  = new File(Constants.WEB_ROOT);
            String repository = new
        }catch (IOException e){

        }

    }
}
