<%@page import="java.util.Vector"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%> 
<HTML>
  <HEAD><TITLE></TITLE>
  <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
  </HEAD>
  <BODY>
  <ul>
  <% 
      for(int i=1; i<10; i++){
    	  out.println("<li><a href='0"+i+"/index.html'>0"+i+"</a></li>");
      }
  
  %>
  </ul>
</BODY>
</HTML> 