<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <!-- 
        ʣ�������������������һ������������...Ϊǰ׺��
        ��������Ϊһ�����飬���д�0����������theArgs.length���ų�����Ԫ���ɴ��ݸ�������ʵ�ʲ����ṩ��

        ʣ������� arguments����֮���������Ҫ��������

ʣ�����ֻ������Щû�ж�Ӧ�βε�ʵ�Σ��� arguments ��������˴�������������ʵ�Ρ�
arguments������һ�����������飬��ʣ������������� Arrayʵ����Ҳ����˵���ܹ���������ֱ��ʹ�����е����鷽�������� sort��map��forEach��pop��
arguments������һЩ���ӵ����� ����callee���ԣ���

        ...
        1 ʣ�������
            �⹹��ֵ ����ʣ�����
        2 ��չ�����
        3 չ�������

        ��ͷ����
        1 ûarguments
        2 ûִ�����壬this���ϼ�������

     -->
     <script>
         let ary=[12,12,13];
         let [...arg]=ary;//ary.slice(0);

         let obj={name:'xxx',age:20};
         let newobj={...obj,sex:0};//չ�� ��ֵ
     </script>
</body>
</html>