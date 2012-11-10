package sample.tomcat.ex02.pyrmont;

import java.io.IOException;

/**
 * Subject :
 * User: ch2seru
 * Date: 12. 8. 19
 */
public class StaticResourceProcessor {
    public void process(Request request, Response response){
        try{
            response.sendStaticResource();
        }catch (IOException e){
            e.printStackTrace();
        }

    }
}
