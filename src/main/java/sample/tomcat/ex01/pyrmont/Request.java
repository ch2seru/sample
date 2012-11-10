package sample.tomcat.ex01.pyrmont;

import java.io.IOException;
import java.io.InputStream;

/**
 * Subject :
 * User: ch2seru
 * Date: 12. 8. 5
 */
public class Request {
    private InputStream input;
    private String uri;

    public Request(InputStream input){
        this.input = input;
    }

    public void parse(){
        //�뚯폆�쇰줈遺�꽣 �쇰젴��臾몄옄�ㅼ쓣 �쎌쓬
        StringBuffer request = new StringBuffer(2048);
        int i;
        byte[] buffer = new byte[2048];

        try{
            i = this.input.read(buffer);
            System.out.println("%%%%%"+i);
        }catch (IOException e){
            e.printStackTrace();
            i=-1;
        }

        for(int j=0; j<i; j++){
            request.append((char)buffer[j]);
        }
        System.out.println("************"+request.toString());
        uri = parseUri(request.toString());
        System.out.println("##############"+uri);
    }

    private String parseUri(String requestString){
        int index1, index2;
        index1 = requestString.indexOf(' ');
        if(index1!=-1){
            index2 = requestString.indexOf(' ', index1+1);
            if(index2 > index1){
                System.out.println("@@@@@"+requestString.substring(index1 + 1, index2));
                return requestString.substring(index1 + 1, index2);
            }
        }
        return null;
    }

    public String getUri(){
        return uri;
    }
}
