package sample.tomcat.ex01.pyrmont;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.InetAddress;
import java.net.ServerSocket;
import java.net.Socket;

/**
 * Subject :
 * User: ch2seru
 * Date: 12. 8. 5
 */
public class HttpServer {
    //WEB_ROOT  �꾨줈�앺듃 寃쎈줈 :System.getProperty("user.dir")
    public static final String WEB_ROOT = System.getProperty("user.dir") + File.separator + "src/main/webroot";
    //醫낅즺紐낅졊
    private static final String SHUTDOWN_COMMAND ="/SHUTDOWN";
    //醫낅즺�щ�
    private boolean shutdown = false;

    public static void main(String[] args){
        HttpServer server = new HttpServer();
        server.await();
    }

    public void await(){
        ServerSocket serverSocket = null;
        int port = 8080;
        try{
            serverSocket = new ServerSocket(port, 1, InetAddress.getByName("127.0.0.1"));
        }catch (IOException e){
            e.printStackTrace();
            System.exit(1);
        }

        while (!shutdown){
            Socket socket = null;
            InputStream input = null;
            OutputStream output = null;

            try{
                socket = serverSocket.accept();
                input = socket.getInputStream();
                output = socket.getOutputStream();

                Request request = new Request(input);
                request.parse();

                Response response = new Response(output);
                response.setRequest(request);
                response.sendStaticResource();

                //�뚯폆 �リ린
                socket.close();

                //醫낅즺 紐낅졊�댁뿀�붿�瑜��뺤씤
                String uri ="";
                if(request.getUri() !=null)  uri =  request.getUri();
                shutdown = uri.equals(SHUTDOWN_COMMAND);

            }catch (Exception e){
                e.printStackTrace();
                continue;
            }
        }
    }

}
