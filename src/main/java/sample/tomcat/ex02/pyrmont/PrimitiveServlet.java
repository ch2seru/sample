package sample.tomcat.ex02.pyrmont;

import javax.servlet.*;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Subject :
 * User: ch2seru
 * Date: 12. 8. 19
 */
public class PrimitiveServlet implements Servlet {
    public void init(ServletConfig servletConfig) throws ServletException {
        System.out.println("init");
        //To change body of implemented methods use File | Settings | File Templates.
    }
    @Override
    public ServletConfig getServletConfig() {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }
    @Override
    public void service(ServletRequest servletRequest, ServletResponse servletResponse) throws ServletException, IOException {
        System.out.println("from service");
        PrintWriter out = servletResponse.getWriter();
        out.println("Hello. Roses are red.");
        out.println("Violets are blue.");
        //To change body of implemented methods use File | Settings | File Templates.
    }
    @Override
    public String getServletInfo() {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }
    @Override
    public void destroy() {
        System.out.println("destroy");
        //To change body of implemented methods use File | Settings | File Templates.
    }
}
