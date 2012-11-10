package sample.tomcat.ex02.pyrmont;


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
public class HttpServer1 {
    //WEB_ROOT  프로젝트 경로 :System.getProperty("user.dir")
    public static final String WEB_ROOT = System.getProperty("user.dir") + File.separator + "src/main/webroot";
    //종료명령
    private static final String SHUTDOWN_COMMAND ="/SHUTDOWN";
    //종료여부
    private boolean shutdown = false;

    public static void main(String[] args){
        HttpServer1 server = new HttpServer1();
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

                if(request.getUri().startsWith("/servlet")){
                    ServletProcessor1 processor = new ServletProcessor1();
                }

                //소켓 닫기
                socket.close();

                //종료 명령이었는지를 확인
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
