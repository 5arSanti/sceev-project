USE [master]
GO
/****** Object:  Database [SCEEV_DB]    Script Date: 9/11/2024 11:11:12 a. m. ******/
CREATE DATABASE [SCEEV_DB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'SCEEV_DB', FILENAME = N'D:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\SCEEV_DB.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'SCEEV_DB_log', FILENAME = N'D:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\SCEEV_DB_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [SCEEV_DB] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [SCEEV_DB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [SCEEV_DB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [SCEEV_DB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [SCEEV_DB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [SCEEV_DB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [SCEEV_DB] SET ARITHABORT OFF 
GO
ALTER DATABASE [SCEEV_DB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [SCEEV_DB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [SCEEV_DB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [SCEEV_DB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [SCEEV_DB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [SCEEV_DB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [SCEEV_DB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [SCEEV_DB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [SCEEV_DB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [SCEEV_DB] SET  ENABLE_BROKER 
GO
ALTER DATABASE [SCEEV_DB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [SCEEV_DB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [SCEEV_DB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [SCEEV_DB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [SCEEV_DB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [SCEEV_DB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [SCEEV_DB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [SCEEV_DB] SET RECOVERY FULL 
GO
ALTER DATABASE [SCEEV_DB] SET  MULTI_USER 
GO
ALTER DATABASE [SCEEV_DB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [SCEEV_DB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [SCEEV_DB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [SCEEV_DB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [SCEEV_DB] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [SCEEV_DB] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'SCEEV_DB', N'ON'
GO
ALTER DATABASE [SCEEV_DB] SET QUERY_STORE = ON
GO
ALTER DATABASE [SCEEV_DB] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
ALTER AUTHORIZATION ON DATABASE::[SCEEV_DB] TO [root]
GO
USE [SCEEV_DB]
GO
/****** Object:  Table [dbo].[Departamentos]    Script Date: 9/11/2024 11:11:12 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Departamentos](
	[ID_Departamento] [int] NOT NULL,
	[Codigo_DANE] [varchar](2) NOT NULL,
	[Nombre] [varchar](100) NOT NULL,
	[ID_Region] [int] NOT NULL,
 CONSTRAINT [PK__Departam__249DEFBEC49C6D42] PRIMARY KEY CLUSTERED 
(
	[ID_Departamento] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER AUTHORIZATION ON [dbo].[Departamentos] TO  SCHEMA OWNER 
GO
/****** Object:  Table [dbo].[Disciplinas]    Script Date: 9/11/2024 11:11:12 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Disciplinas](
	[ID_Disciplina] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID_Disciplina] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER AUTHORIZATION ON [dbo].[Disciplinas] TO  SCHEMA OWNER 
GO
/****** Object:  Table [dbo].[Empleador]    Script Date: 9/11/2024 11:11:12 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Empleador](
	[ID_Empleador] [int] NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[Tipo_Documento] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID_Empleador] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER AUTHORIZATION ON [dbo].[Empleador] TO  SCHEMA OWNER 
GO
/****** Object:  Table [dbo].[Municipios]    Script Date: 9/11/2024 11:11:12 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Municipios](
	[ID_Municipio] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](255) NOT NULL,
	[ID_Departamento] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[ID_Municipio] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER AUTHORIZATION ON [dbo].[Municipios] TO  SCHEMA OWNER 
GO
/****** Object:  Table [dbo].[Nivel_Estudios]    Script Date: 9/11/2024 11:11:12 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Nivel_Estudios](
	[ID_Nivel_Estudios] [int] NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID_Nivel_Estudios] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER AUTHORIZATION ON [dbo].[Nivel_Estudios] TO  SCHEMA OWNER 
GO
/****** Object:  Table [dbo].[Ofertas_empleo_completo]    Script Date: 9/11/2024 11:11:12 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Ofertas_empleo_completo](
	[Codigo_Oferta] [int] NOT NULL,
	[Titulo_Oferta] [varchar](255) NOT NULL,
	[Descripcion_Oferta] [text] NOT NULL,
	[Experiencia] [int] NOT NULL,
	[Salario_Ingresado] [int] NULL,
	[Cantidad_Ofertas] [int] NOT NULL,
	[Teletrabajo] [bit] NOT NULL,
	[Discapacidad] [bit] NOT NULL,
	[Cargo] [varchar](255) NOT NULL,
	[Fecha_Publicacion] [datetime] NOT NULL,
	[Fecha_Vencimiento] [datetime] NOT NULL,
	[ID_Prestador] [int] NOT NULL,
	[Nombre_Prestador] [int] NOT NULL,
	[Contrato] [varchar](100) NOT NULL,
	[Nivel_Estudios] [int] NOT NULL,
	[Nombre_Disciplina] [varchar](255) NOT NULL,
	[ID_Empleador] [int] NOT NULL,
	[Nombre_Empleador] [varchar](255) NOT NULL,
	[Tipo_Documento_Empleador] [int] NOT NULL,
	[Departamento] [varchar](255) NOT NULL,
	[Municipio] [varchar](255) NOT NULL,
	[Region] [varchar](255) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Codigo_Oferta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER AUTHORIZATION ON [dbo].[Ofertas_empleo_completo] TO  SCHEMA OWNER 
GO
/****** Object:  Table [dbo].[Ofertas_Empleo_Desglosado]    Script Date: 9/11/2024 11:11:12 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Ofertas_Empleo_Desglosado](
	[Codigo_Oferta] [int] NOT NULL,
	[Titulo_Oferta] [varchar](255) NOT NULL,
	[Descripcion_Oferta] [text] NOT NULL,
	[Experiencia] [int] NOT NULL,
	[Salario_Ingresado] [int] NULL,
	[Cantidad_Ofertas] [int] NOT NULL,
	[Teletrabajo] [bit] NOT NULL,
	[Discapacidad] [bit] NOT NULL,
	[Cargo] [varchar](255) NOT NULL,
	[Fecha_Publicacion] [datetime] NOT NULL,
	[Fecha_Vencimiento] [datetime] NOT NULL,
	[ID_Prestador] [int] NOT NULL,
	[ID_Tipo_Contrato] [int] NOT NULL,
	[ID_Nivel_Estudios] [int] NOT NULL,
	[ID_Departamento] [int] NOT NULL,
	[ID_Empleador] [int] NOT NULL,
	[ID_Municipio] [int] NOT NULL,
	[ID_Region] [int] NOT NULL,
	[ID_Disciplina] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Codigo_Oferta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER AUTHORIZATION ON [dbo].[Ofertas_Empleo_Desglosado] TO  SCHEMA OWNER 
GO
/****** Object:  Table [dbo].[Prestadores]    Script Date: 9/11/2024 11:11:12 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Prestadores](
	[ID_Prestador] [int] NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[ID_Tipo_Prestador] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID_Prestador] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER AUTHORIZATION ON [dbo].[Prestadores] TO  SCHEMA OWNER 
GO
/****** Object:  Table [dbo].[Regiones]    Script Date: 9/11/2024 11:11:12 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Regiones](
	[ID_Region] [int] NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID_Region] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER AUTHORIZATION ON [dbo].[Regiones] TO  SCHEMA OWNER 
GO
/****** Object:  Table [dbo].[Tipo_Contrato]    Script Date: 9/11/2024 11:11:12 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tipo_Contrato](
	[ID_Tipo_Contrato] [int] NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID_Tipo_Contrato] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER AUTHORIZATION ON [dbo].[Tipo_Contrato] TO  SCHEMA OWNER 
GO
/****** Object:  Table [dbo].[Tipo_Documento]    Script Date: 9/11/2024 11:11:12 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tipo_Documento](
	[ID_Tipo_Documento] [int] NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID_Tipo_Documento] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER AUTHORIZATION ON [dbo].[Tipo_Documento] TO  SCHEMA OWNER 
GO
/****** Object:  Table [dbo].[Tipo_Prestadores]    Script Date: 9/11/2024 11:11:12 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tipo_Prestadores](
	[ID_Tipo_Prestadores] [int] NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID_Tipo_Prestadores] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER AUTHORIZATION ON [dbo].[Tipo_Prestadores] TO  SCHEMA OWNER 
GO
/****** Object:  Table [dbo].[Tipo_Usuarios]    Script Date: 9/11/2024 11:11:12 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tipo_Usuarios](
	[ID_Tipo_Usuarios] [int] NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID_Tipo_Usuarios] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER AUTHORIZATION ON [dbo].[Tipo_Usuarios] TO  SCHEMA OWNER 
GO
/****** Object:  Table [dbo].[Usuarios]    Script Date: 9/11/2024 11:11:12 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuarios](
	[Cedula_Usuario] [int] NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[Apellidos] [varchar](50) NOT NULL,
	[Correo] [varchar](255) NOT NULL,
	[Contraseña] [text] NOT NULL,
	[ID_Tipo_De_Usuario] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Cedula_Usuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER AUTHORIZATION ON [dbo].[Usuarios] TO  SCHEMA OWNER 
GO
INSERT [dbo].[Departamentos] ([ID_Departamento], [Codigo_DANE], [Nombre], [ID_Region]) VALUES (1, N'91', N'Amazonas', 1)
INSERT [dbo].[Departamentos] ([ID_Departamento], [Codigo_DANE], [Nombre], [ID_Region]) VALUES (2, N'05', N'Antioquia', 2)
INSERT [dbo].[Departamentos] ([ID_Departamento], [Codigo_DANE], [Nombre], [ID_Region]) VALUES (3, N'81', N'Arauca', 5)
INSERT [dbo].[Departamentos] ([ID_Departamento], [Codigo_DANE], [Nombre], [ID_Region]) VALUES (4, N'88', N'Archipiélago de San Andrés', 4)
INSERT [dbo].[Departamentos] ([ID_Departamento], [Codigo_DANE], [Nombre], [ID_Region]) VALUES (5, N'08', N'Atlántico', 3)
INSERT [dbo].[Departamentos] ([ID_Departamento], [Codigo_DANE], [Nombre], [ID_Region]) VALUES (6, N'11', N'Bogotá, D.C.', 2)
INSERT [dbo].[Departamentos] ([ID_Departamento], [Codigo_DANE], [Nombre], [ID_Region]) VALUES (7, N'13', N'Bolívar', 3)
INSERT [dbo].[Departamentos] ([ID_Departamento], [Codigo_DANE], [Nombre], [ID_Region]) VALUES (8, N'15', N'Boyacá', 2)
INSERT [dbo].[Departamentos] ([ID_Departamento], [Codigo_DANE], [Nombre], [ID_Region]) VALUES (9, N'17', N'Caldas', 2)
INSERT [dbo].[Departamentos] ([ID_Departamento], [Codigo_DANE], [Nombre], [ID_Region]) VALUES (10, N'18', N'Caquetá', 1)
INSERT [dbo].[Departamentos] ([ID_Departamento], [Codigo_DANE], [Nombre], [ID_Region]) VALUES (11, N'85', N'Casanare', 5)
INSERT [dbo].[Departamentos] ([ID_Departamento], [Codigo_DANE], [Nombre], [ID_Region]) VALUES (12, N'19', N'Cauca', 6)
INSERT [dbo].[Departamentos] ([ID_Departamento], [Codigo_DANE], [Nombre], [ID_Region]) VALUES (13, N'20', N'Cesar', 3)
INSERT [dbo].[Departamentos] ([ID_Departamento], [Codigo_DANE], [Nombre], [ID_Region]) VALUES (14, N'27', N'Chocó', 6)
INSERT [dbo].[Departamentos] ([ID_Departamento], [Codigo_DANE], [Nombre], [ID_Region]) VALUES (15, N'23', N'Córdoba', 3)
INSERT [dbo].[Departamentos] ([ID_Departamento], [Codigo_DANE], [Nombre], [ID_Region]) VALUES (16, N'25', N'Cundinamarca', 2)
INSERT [dbo].[Departamentos] ([ID_Departamento], [Codigo_DANE], [Nombre], [ID_Region]) VALUES (17, N'94', N'Guainía', 1)
INSERT [dbo].[Departamentos] ([ID_Departamento], [Codigo_DANE], [Nombre], [ID_Region]) VALUES (18, N'95', N'Guaviare', 1)
INSERT [dbo].[Departamentos] ([ID_Departamento], [Codigo_DANE], [Nombre], [ID_Region]) VALUES (19, N'41', N'Huila', 2)
INSERT [dbo].[Departamentos] ([ID_Departamento], [Codigo_DANE], [Nombre], [ID_Region]) VALUES (20, N'44', N'La Guajira', 3)
INSERT [dbo].[Departamentos] ([ID_Departamento], [Codigo_DANE], [Nombre], [ID_Region]) VALUES (21, N'47', N'Magdalena', 3)
INSERT [dbo].[Departamentos] ([ID_Departamento], [Codigo_DANE], [Nombre], [ID_Region]) VALUES (22, N'50', N'Meta', 5)
INSERT [dbo].[Departamentos] ([ID_Departamento], [Codigo_DANE], [Nombre], [ID_Region]) VALUES (23, N'52', N'Nariño', 6)
INSERT [dbo].[Departamentos] ([ID_Departamento], [Codigo_DANE], [Nombre], [ID_Region]) VALUES (24, N'54', N'Norte de Santander', 2)
INSERT [dbo].[Departamentos] ([ID_Departamento], [Codigo_DANE], [Nombre], [ID_Region]) VALUES (25, N'86', N'Putumayo', 1)
INSERT [dbo].[Departamentos] ([ID_Departamento], [Codigo_DANE], [Nombre], [ID_Region]) VALUES (26, N'63', N'Quindío', 2)
INSERT [dbo].[Departamentos] ([ID_Departamento], [Codigo_DANE], [Nombre], [ID_Region]) VALUES (27, N'66', N'Risaralda', 2)
INSERT [dbo].[Departamentos] ([ID_Departamento], [Codigo_DANE], [Nombre], [ID_Region]) VALUES (28, N'68', N'Santander', 2)
INSERT [dbo].[Departamentos] ([ID_Departamento], [Codigo_DANE], [Nombre], [ID_Region]) VALUES (29, N'70', N'Sucre', 3)
INSERT [dbo].[Departamentos] ([ID_Departamento], [Codigo_DANE], [Nombre], [ID_Region]) VALUES (30, N'73', N'Tolima', 2)
INSERT [dbo].[Departamentos] ([ID_Departamento], [Codigo_DANE], [Nombre], [ID_Region]) VALUES (31, N'76', N'Valle del Cauca', 6)
INSERT [dbo].[Departamentos] ([ID_Departamento], [Codigo_DANE], [Nombre], [ID_Region]) VALUES (32, N'97', N'Vaupés', 1)
INSERT [dbo].[Departamentos] ([ID_Departamento], [Codigo_DANE], [Nombre], [ID_Region]) VALUES (33, N'99', N'Vichada', 5)
GO
INSERT [dbo].[Regiones] ([ID_Region], [Nombre]) VALUES (1, N'Amazonía')
INSERT [dbo].[Regiones] ([ID_Region], [Nombre]) VALUES (2, N'Andina')
INSERT [dbo].[Regiones] ([ID_Region], [Nombre]) VALUES (3, N'Caribe')
INSERT [dbo].[Regiones] ([ID_Region], [Nombre]) VALUES (4, N'Insular')
INSERT [dbo].[Regiones] ([ID_Region], [Nombre]) VALUES (5, N'Orinoquía')
INSERT [dbo].[Regiones] ([ID_Region], [Nombre]) VALUES (6, N'Pacífico')
GO
INSERT [dbo].[Tipo_Usuarios] ([ID_Tipo_Usuarios], [Nombre]) VALUES (1, N'Administrador')
GO
INSERT [dbo].[Usuarios] ([Cedula_Usuario], [Nombre], [Apellidos], [Correo], [Contraseña], [ID_Tipo_De_Usuario]) VALUES (1016712696, N'Nicolas Daza', N'Redondo', N'nicolas-dazar@unilibre.edu.co', N'$2b$10$lviAWhOYf1SWDSj41b1FCe17eSeLln5Bncf5ZzhQ/keyRMdAz6vau', 1)
INSERT [dbo].[Usuarios] ([Cedula_Usuario], [Nombre], [Apellidos], [Correo], [Contraseña], [ID_Tipo_De_Usuario]) VALUES (1016947063, N'Johel Santiago', N'Arias Becerra', N'santiari05@hotmail.com', N'$2b$10$pY5JINU8DNEU1DuLLPE/a.Arm9VipTccjKNeQ2S6n/sqPTrOaU68C', 1)
INSERT [dbo].[Usuarios] ([Cedula_Usuario], [Nombre], [Apellidos], [Correo], [Contraseña], [ID_Tipo_De_Usuario]) VALUES (1019604697, N'Juan Pablo', N'Marquez Alfonso', N'juanp-marqueza@unilibre.edu.co', N'$2b$10$wh6EhE/r3qH31LaQnNfEoel6n6H7ll3Az/.bXf0dU8AvSNr0vnY1a', 1)
INSERT [dbo].[Usuarios] ([Cedula_Usuario], [Nombre], [Apellidos], [Correo], [Contraseña], [ID_Tipo_De_Usuario]) VALUES (1021667772, N'Cristian Manuel', N'Rivera Trujillo', N'cristianm-riverat@unilibre.edu.co', N'$2b$10$r6BWYIsbsTCXGdxcLizRSuQ.bUH2oQkt/DV66c.jVSpYTNLuNfBKG', 1)
INSERT [dbo].[Usuarios] ([Cedula_Usuario], [Nombre], [Apellidos], [Correo], [Contraseña], [ID_Tipo_De_Usuario]) VALUES (1030671354, N'Gildardo Andres', N'Betancourt Vargas', N'gildardoa-betancourtv@unilibre.edu.co', N'$2b$10$/USFwwR/owOQfS9YIYnCj.paHDigsHwF5CTupC92ITem/9z1HFDrS', 1)
GO
ALTER TABLE [dbo].[Departamentos]  WITH CHECK ADD  CONSTRAINT [FK__Departame__ID_Re__44FF419A] FOREIGN KEY([ID_Region])
REFERENCES [dbo].[Regiones] ([ID_Region])
GO
ALTER TABLE [dbo].[Departamentos] CHECK CONSTRAINT [FK__Departame__ID_Re__44FF419A]
GO
ALTER TABLE [dbo].[Empleador]  WITH CHECK ADD FOREIGN KEY([Tipo_Documento])
REFERENCES [dbo].[Tipo_Documento] ([ID_Tipo_Documento])
GO
ALTER TABLE [dbo].[Municipios]  WITH CHECK ADD  CONSTRAINT [FK__Municipio__ID_De__47DBAE45] FOREIGN KEY([ID_Departamento])
REFERENCES [dbo].[Departamentos] ([ID_Departamento])
GO
ALTER TABLE [dbo].[Municipios] CHECK CONSTRAINT [FK__Municipio__ID_De__47DBAE45]
GO
ALTER TABLE [dbo].[Ofertas_Empleo_Desglosado]  WITH CHECK ADD  CONSTRAINT [FK__Ofertas_E__ID_De__5629CD9C] FOREIGN KEY([ID_Departamento])
REFERENCES [dbo].[Departamentos] ([ID_Departamento])
GO
ALTER TABLE [dbo].[Ofertas_Empleo_Desglosado] CHECK CONSTRAINT [FK__Ofertas_E__ID_De__5629CD9C]
GO
ALTER TABLE [dbo].[Ofertas_Empleo_Desglosado]  WITH CHECK ADD FOREIGN KEY([ID_Disciplina])
REFERENCES [dbo].[Disciplinas] ([ID_Disciplina])
GO
ALTER TABLE [dbo].[Ofertas_Empleo_Desglosado]  WITH CHECK ADD FOREIGN KEY([ID_Empleador])
REFERENCES [dbo].[Empleador] ([ID_Empleador])
GO
ALTER TABLE [dbo].[Ofertas_Empleo_Desglosado]  WITH CHECK ADD FOREIGN KEY([ID_Municipio])
REFERENCES [dbo].[Municipios] ([ID_Municipio])
GO
ALTER TABLE [dbo].[Ofertas_Empleo_Desglosado]  WITH CHECK ADD FOREIGN KEY([ID_Nivel_Estudios])
REFERENCES [dbo].[Nivel_Estudios] ([ID_Nivel_Estudios])
GO
ALTER TABLE [dbo].[Ofertas_Empleo_Desglosado]  WITH CHECK ADD FOREIGN KEY([ID_Prestador])
REFERENCES [dbo].[Prestadores] ([ID_Prestador])
GO
ALTER TABLE [dbo].[Ofertas_Empleo_Desglosado]  WITH CHECK ADD FOREIGN KEY([ID_Region])
REFERENCES [dbo].[Regiones] ([ID_Region])
GO
ALTER TABLE [dbo].[Ofertas_Empleo_Desglosado]  WITH CHECK ADD FOREIGN KEY([ID_Tipo_Contrato])
REFERENCES [dbo].[Tipo_Contrato] ([ID_Tipo_Contrato])
GO
ALTER TABLE [dbo].[Prestadores]  WITH CHECK ADD FOREIGN KEY([ID_Tipo_Prestador])
REFERENCES [dbo].[Tipo_Prestadores] ([ID_Tipo_Prestadores])
GO
ALTER TABLE [dbo].[Usuarios]  WITH CHECK ADD FOREIGN KEY([ID_Tipo_De_Usuario])
REFERENCES [dbo].[Tipo_Usuarios] ([ID_Tipo_Usuarios])
GO
USE [master]
GO
ALTER DATABASE [SCEEV_DB] SET  READ_WRITE 
GO
