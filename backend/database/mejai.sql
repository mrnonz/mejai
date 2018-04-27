-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: mejai_db_1
-- Generation Time: Apr 27, 2018 at 02:48 PM
-- Server version: 5.7.21
-- PHP Version: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mejai`
--

-- --------------------------------------------------------

--
-- Table structure for table `Auction`
--

CREATE TABLE `Auction` (
  `id` int(11) NOT NULL,
  `exp_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `lastest_price` decimal(10,2) NOT NULL,
  `price_step` decimal(10,2) NOT NULL,
  `product_id` int(11) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `valid` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Auction`
--

INSERT INTO `Auction` (`id`, `exp_time`, `lastest_price`, `price_step`, `product_id`, `customer_id`, `valid`) VALUES
(1, '2018-04-17 17:26:40', '510.00', '440.00', 23, 22, 0),
(2, '2018-04-17 17:26:40', '1100.00', '50.00', 24, 21, 0),
(3, '2018-04-17 18:02:01', '505.00', '1.00', 25, 21, 0),
(4, '2018-04-17 18:07:01', '1114.00', '100.00', 26, 21, 0),
(5, '2018-04-18 08:31:01', '40.00', '5.00', 28, 21, 0),
(6, '2018-04-18 12:31:01', '7500.00', '500.00', 29, 21, 0),
(7, '2018-04-25 10:04:01', '356.78', '5.00', 32, 31, 0),
(8, '2018-04-26 15:31:01', '550.00', '10.00', 36, 30, 0);

-- --------------------------------------------------------

--
-- Table structure for table `Auction_Customer`
--

CREATE TABLE `Auction_Customer` (
  `id` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `auction_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Auction_Customer`
--

INSERT INTO `Auction_Customer` (`id`, `price`, `time`, `auction_id`, `customer_id`) VALUES
(1, '420.01', '2018-04-17 11:15:55', 1, 22),
(2, '450.00', '2018-04-17 11:16:27', 1, 22),
(3, '500.00', '2018-04-17 11:16:43', 1, 22),
(4, '510.00', '2018-04-17 11:19:33', 1, 22),
(5, '350.00', '2018-04-17 12:18:37', 2, 20),
(6, '400.00', '2018-04-17 12:21:35', 2, 20),
(7, '450.00', '2018-04-17 12:21:40', 2, 20),
(8, '500.00', '2018-04-17 12:21:50', 2, 20),
(9, '550.00', '2018-04-17 12:22:02', 2, 20),
(10, '554.00', '2018-04-17 12:23:10', 2, 20),
(11, '605.00', '2018-04-17 12:24:36', 2, 20),
(12, '655.00', '2018-04-17 17:24:27', 2, 21),
(13, '710.00', '2018-04-17 17:24:37', 2, 20),
(14, '760.00', '2018-04-17 17:25:10', 2, 21),
(15, '810.00', '2018-04-17 17:25:19', 2, 20),
(16, '860.00', '2018-04-17 17:26:02', 2, 21),
(17, '910.00', '2018-04-17 17:28:34', 2, 20),
(18, '960.00', '2018-04-17 17:28:42', 2, 21),
(19, '1050.00', '2018-04-17 17:28:48', 2, 20),
(20, '1100.00', '2018-04-17 17:28:52', 2, 21),
(21, '505.00', '2018-04-17 17:48:57', 3, 21),
(22, '1114.00', '2018-04-17 18:04:29', 4, 21),
(23, '20.00', '2018-04-18 08:27:01', 5, 21),
(24, '25.00', '2018-04-18 08:28:18', 5, 20),
(25, '40.00', '2018-04-18 08:28:26', 5, 21),
(26, '5500.00', '2018-04-18 12:06:47', 6, 21),
(27, '6000.00', '2018-04-18 12:07:00', 6, 20),
(28, '6500.00', '2018-04-18 12:08:26', 6, 21),
(29, '7000.00', '2018-04-18 12:08:32', 6, 20),
(30, '7500.00', '2018-04-18 12:08:35', 6, 21),
(31, '150.00', '2018-04-24 07:55:57', 7, 30),
(32, '155.00', '2018-04-25 10:02:26', 7, 31),
(33, '200.00', '2018-04-25 10:02:38', 7, 21),
(34, '356.78', '2018-04-25 10:02:46', 7, 31),
(35, '550.00', '2018-04-26 15:22:24', 8, 30);

-- --------------------------------------------------------

--
-- Table structure for table `authtoken_token`
--

CREATE TABLE `authtoken_token` (
  `key` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `created` datetime(6) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `authtoken_token`
--

INSERT INTO `authtoken_token` (`key`, `created`, `user_id`) VALUES
('a86cac508efddd02315597e10a43c944fa4d88bb', '2018-03-19 09:10:59.146834', 2);

-- --------------------------------------------------------

--
-- Table structure for table `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can add permission', 2, 'add_permission'),
(5, 'Can change permission', 2, 'change_permission'),
(6, 'Can delete permission', 2, 'delete_permission'),
(7, 'Can add group', 3, 'add_group'),
(8, 'Can change group', 3, 'change_group'),
(9, 'Can delete group', 3, 'delete_group'),
(10, 'Can add user', 4, 'add_user'),
(11, 'Can change user', 4, 'change_user'),
(12, 'Can delete user', 4, 'delete_user'),
(13, 'Can add content type', 5, 'add_contenttype'),
(14, 'Can change content type', 5, 'change_contenttype'),
(15, 'Can delete content type', 5, 'delete_contenttype'),
(16, 'Can add session', 6, 'add_session'),
(17, 'Can change session', 6, 'change_session'),
(18, 'Can delete session', 6, 'delete_session'),
(19, 'Can add product', 7, 'add_product'),
(20, 'Can change product', 7, 'change_product'),
(21, 'Can delete product', 7, 'delete_product'),
(22, 'Can add product attribute', 8, 'add_productattribute'),
(23, 'Can change product attribute', 8, 'change_productattribute'),
(24, 'Can delete product attribute', 8, 'delete_productattribute'),
(25, 'Can add product category', 9, 'add_productcategory'),
(26, 'Can change product category', 9, 'change_productcategory'),
(27, 'Can delete product category', 9, 'delete_productcategory'),
(28, 'Can add product image', 10, 'add_productimage'),
(29, 'Can change product image', 10, 'change_productimage'),
(30, 'Can delete product image', 10, 'delete_productimage'),
(31, 'Can add django migrations', 11, 'add_djangomigrations'),
(32, 'Can change django migrations', 11, 'change_djangomigrations'),
(33, 'Can delete django migrations', 11, 'delete_djangomigrations'),
(34, 'Can add order', 12, 'add_order'),
(35, 'Can change order', 12, 'change_order'),
(36, 'Can delete order', 12, 'delete_order'),
(37, 'Can add auction', 13, 'add_auction'),
(38, 'Can change auction', 13, 'change_auction'),
(39, 'Can delete auction', 13, 'delete_auction'),
(40, 'Can add customer', 14, 'add_customer'),
(41, 'Can change customer', 14, 'change_customer'),
(42, 'Can delete customer', 14, 'delete_customer'),
(43, 'Can add auction customer', 15, 'add_auctioncustomer'),
(44, 'Can change auction customer', 15, 'change_auctioncustomer'),
(45, 'Can delete auction customer', 15, 'delete_auctioncustomer'),
(46, 'Can add organization', 16, 'add_organization'),
(47, 'Can change organization', 16, 'change_organization'),
(48, 'Can delete organization', 16, 'delete_organization'),
(49, 'Can add bank', 17, 'add_bank'),
(50, 'Can change bank', 17, 'change_bank'),
(51, 'Can delete bank', 17, 'delete_bank'),
(52, 'Can add organization bank', 18, 'add_organizationbank'),
(53, 'Can change organization bank', 18, 'change_organizationbank'),
(54, 'Can delete organization bank', 18, 'delete_organizationbank'),
(55, 'Can add order organization', 19, 'add_orderorganization'),
(56, 'Can change order organization', 19, 'change_orderorganization'),
(57, 'Can delete order organization', 19, 'delete_orderorganization'),
(58, 'Can add cart', 20, 'add_cart'),
(59, 'Can change cart', 20, 'change_cart'),
(60, 'Can delete cart', 20, 'delete_cart'),
(61, 'Can add cart product', 21, 'add_cartproduct'),
(62, 'Can change cart product', 21, 'change_cartproduct'),
(63, 'Can delete cart product', 21, 'delete_cartproduct'),
(64, 'Can add product image', 22, 'add_productimage'),
(65, 'Can change product image', 22, 'change_productimage'),
(66, 'Can delete product image', 22, 'delete_productimage'),
(67, 'Can add product attribute', 23, 'add_productattribute'),
(68, 'Can change product attribute', 23, 'change_productattribute'),
(69, 'Can delete product attribute', 23, 'delete_productattribute'),
(70, 'Can add product category', 24, 'add_productcategory'),
(71, 'Can change product category', 24, 'change_productcategory'),
(72, 'Can delete product category', 24, 'delete_productcategory'),
(73, 'Can add Token', 25, 'add_token'),
(74, 'Can change Token', 25, 'change_token'),
(75, 'Can delete Token', 25, 'delete_token'),
(76, 'Can add organization promptpay', 26, 'add_organizationpromptpay'),
(77, 'Can change organization promptpay', 26, 'change_organizationpromptpay'),
(78, 'Can delete organization promptpay', 26, 'delete_organizationpromptpay');

-- --------------------------------------------------------

--
-- Table structure for table `auth_user`
--

CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_groups`
--

CREATE TABLE `auth_user_groups` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_user_permissions`
--

CREATE TABLE `auth_user_user_permissions` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Bank`
--

CREATE TABLE `Bank` (
  `id` int(11) NOT NULL,
  `name_en` char(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `name_th` char(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `symbol` char(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `logo` varchar(1023) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Bank`
--

INSERT INTO `Bank` (`id`, `name_en`, `name_th`, `symbol`, `logo`) VALUES
(1, 'Siam Commercial Bank', 'ไทยพาณิชย์', 'SCB', ''),
(2, 'Kasikorn', 'กสิกรไทย', 'KBANK', ''),
(3, 'Bangkok', 'กรุงเทพ', 'BBL', ''),
(4, 'Krungthai', 'กรุงไทย', 'KTB', ''),
(5, 'Krungsri', 'กรุงศรีอยุธยา', 'BAY', ''),
(6, 'Thai Military', 'ทหารไทย', 'TMB', ''),
(7, 'Thanachart', 'ธนชาต', 'TBANK', '');

-- --------------------------------------------------------

--
-- Table structure for table `Cart`
--

CREATE TABLE `Cart` (
  `id` int(11) NOT NULL,
  `time` datetime(6) NOT NULL,
  `customer_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `Cart`
--

INSERT INTO `Cart` (`id`, `time`, `customer_id`) VALUES
(3, '2018-03-04 00:00:00.000000', 1),
(5, '2018-03-19 00:00:00.000000', 2),
(6, '2018-03-20 00:00:00.000000', 3),
(7, '2018-04-17 17:26:40.653270', 22),
(23, '2018-04-17 18:01:01.625586', 21),
(24, '2018-04-24 08:09:05.201743', 29),
(25, '2018-04-24 08:17:45.240670', 30),
(26, '2018-04-24 12:24:30.872292', 32),
(27, '2018-04-25 09:53:05.893619', 31),
(28, '2018-04-26 14:42:02.724974', 20);

-- --------------------------------------------------------

--
-- Table structure for table `Cart_Product`
--

CREATE TABLE `Cart_Product` (
  `id` int(11) NOT NULL,
  `time` datetime(6) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `quantity` int(11) NOT NULL,
  `cart_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `attribute_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `Cart_Product`
--

INSERT INTO `Cart_Product` (`id`, `time`, `price`, `quantity`, `cart_id`, `product_id`, `attribute_id`) VALUES
(5, '2018-03-13 00:00:00.000000', '444.23', 4, 6, 3, 2),
(10, '2018-04-16 06:29:43.303482', '420.00', 1, 3, 16, NULL),
(16, '2018-04-16 17:27:48.728724', '120.00', 2, 5, 17, 10),
(17, '2018-04-16 17:39:51.626059', '1200.00', 1, 5, 18, NULL),
(18, '2018-04-17 17:26:40.662427', '510.00', 1, 7, 23, NULL),
(26, '2018-04-18 16:15:52.641398', '24000.00', 1, 23, 19, 13),
(27, '2018-04-22 10:20:57.000349', '24000.00', 22, 7, 19, 12),
(28, '2018-04-24 08:14:17.406755', '24000.00', 1, 24, 19, 13),
(30, '2018-04-24 08:18:58.261060', '5000.00', 1, 7, 27, 16),
(31, '2018-04-24 12:24:30.916137', '650.00', 1, 26, 33, 18),
(32, '2018-04-25 07:36:16.803508', '2500.00', 1, 7, 20, NULL),
(35, '2018-04-25 10:04:01.447635', '356.78', 1, 27, 32, NULL),
(36, '2018-04-26 14:42:02.800427', '450.00', 1, 28, 35, 23),
(37, '2018-04-26 15:31:01.410727', '550.00', 1, 25, 36, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Customer`
--

CREATE TABLE `Customer` (
  `id` int(11) NOT NULL,
  `email` varchar(254) NOT NULL,
  `username` varchar(150) NOT NULL,
  `password` varchar(128) NOT NULL,
  `line_id` char(255) DEFAULT NULL,
  `sex` char(1) DEFAULT NULL,
  `address` varchar(1023) DEFAULT NULL,
  `tel` char(15) DEFAULT NULL,
  `picture` varchar(1023) NOT NULL,
  `order_count` int(11) NOT NULL,
  `buy_count` int(11) NOT NULL,
  `sell_count` int(11) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `last_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Customer`
--

INSERT INTO `Customer` (`id`, `email`, `username`, `password`, `line_id`, `sex`, `address`, `tel`, `picture`, `order_count`, `buy_count`, `sell_count`, `date_joined`, `first_name`, `is_active`, `is_staff`, `is_superuser`, `last_login`, `last_name`) VALUES
(20, 'useremail1@mail.com', 'useremail1@mail.com', '123456789', NULL, NULL, 'สมชาย\\ใจดี\\ลาดกระบัง\\ลาดกระบัง\\กรุงเทพ\\10123\\088-1234567', NULL, '', 0, 0, 0, '2018-04-17 08:00:44.101289', 'สุวิทย์', 1, 0, 0, NULL, 'จงใจหมาย'),
(21, 'useremail2@mail.com', 'useremail2@mail.com', '123456789', NULL, NULL, 'ณรง\\อิ่มเอม\\บางนา\\บางนา\\กรุงเทพ\\10633\\091-1254788', NULL, '', 0, 0, 0, '2018-04-17 08:02:07.438672', 'ณรง', 1, 0, 0, NULL, 'อิ่มเอม'),
(22, 'abcmail@mail.com', 'abcmail@mail.com', '123456789', NULL, NULL, NULL, NULL, '', 0, 0, 0, '2018-04-21 09:46:46.642308', 'สุชาติ', 1, 0, 0, NULL, 'จงใจ'),
(23, 'testmm@mail.com', 'testmm@mail.com', '123456789', NULL, NULL, NULL, NULL, '', 0, 0, 0, '2018-04-23 06:02:42.042762', 'จริง', 1, 0, 0, NULL, 'นะนะ'),
(24, 'testmail@mail.com', 'testmail@mail.com', '123456789', NULL, NULL, NULL, NULL, '', 0, 0, 0, '2018-04-23 06:03:56.736289', 'จริง', 1, 0, 0, NULL, 'นะนะ'),
(25, 'testmail2@mail.com', 'testmail2@mail.com', '123456789', NULL, NULL, NULL, NULL, '', 0, 0, 0, '2018-04-23 06:04:39.335211', 'จริง', 1, 0, 0, NULL, 'นะนะ'),
(27, 'mailmailami@mail.com', 'mailmailami@mail.com', '123456789', NULL, NULL, NULL, NULL, 'https://storage.googleapis.com/mejai/customer/image/profile/0da5a1c3f90b4956ab91799deafd4975.jpg', 0, 0, 0, '2018-04-23 06:06:11.408644', 'john', 1, 0, 0, NULL, 'doe'),
(28, 'aaaaa@mao.com', 'aaaaa@mao.com', '123456789', NULL, NULL, NULL, NULL, 'https://storage.googleapis.com/mejai/customer/image/profile/b31e9b7c6e1a4b24b69636e6e34c329c.jpg', 0, 0, 0, '2018-04-23 06:07:14.245865', 'Jhh', 1, 0, 0, NULL, 'DD'),
(29, 'abcdef@mail.com', 'abcdef@mail.com', '123456789', NULL, NULL, NULL, NULL, 'https://storage.googleapis.com/mejai/customer/image/profile/a844a4973245443faafd3c8116bbc8f6.jpg', 0, 0, 0, '2018-04-23 07:37:50.993534', 'ดำ', 1, 0, 0, NULL, 'ขาว'),
(30, 'aeiou@mail.com', 'aeiou@mail.com', '123456789', NULL, NULL, 'สมศักดิ์\\สมศรี\\ลาดกระบัง\\ลาดกระบัง\\กรุงเทพมหานคร\\10123\\022145787984', NULL, 'https://storage.googleapis.com/mejai/customer/image/profile/3641bb4fcfb047c995aea8ca907f09c3.jpeg', 0, 0, 0, '2018-04-24 07:45:02.272902', 'น้ำเงิน', 1, 0, 0, NULL, 'แดง'),
(31, 'exmail1@mail.com', 'exmail1@mail.com', '123456789', NULL, NULL, 'สมศรี\\อ่าห๊ะ\\11\\11\\bangkok\\1111\\0876543', NULL, 'https://storage.googleapis.com/mejai/customer/image/profile/c71327622d9a48c392347a6f549ab9d5.jpg', 0, 0, 0, '2018-04-24 12:21:53.400507', 'จิตใจ', 1, 0, 0, NULL, 'ดี'),
(32, 'exmail2@mail.com', 'exmail2@mail.com', '123456789', NULL, NULL, '\\จิตใจ\\ไทย\\ไทย\\กทม\\555666\\8889996566', NULL, 'https://storage.googleapis.com/mejai/customer/image/profile/73f1b0fb21f74622a0f363bd287d7a77.jpg', 0, 0, 0, '2018-04-24 12:22:40.633507', 'จิตใจ', 1, 0, 0, NULL, 'งาม');

-- --------------------------------------------------------

--
-- Table structure for table `Customer_groups`
--

CREATE TABLE `Customer_groups` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Customer_user_permissions`
--

CREATE TABLE `Customer_user_permissions` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(13, 'auction', 'auction'),
(15, 'auction_customer', 'auctioncustomer'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(4, 'auth', 'user'),
(25, 'authtoken', 'token'),
(17, 'bank', 'bank'),
(20, 'cart', 'cart'),
(21, 'cart_product', 'cartproduct'),
(5, 'contenttypes', 'contenttype'),
(14, 'customer', 'customer'),
(12, 'order', 'order'),
(19, 'order_organization', 'orderorganization'),
(16, 'organization', 'organization'),
(18, 'organization_bank', 'organizationbank'),
(26, 'organization_promptpay', 'organizationpromptpay'),
(11, 'product', 'djangomigrations'),
(7, 'product', 'product'),
(8, 'product', 'productattribute'),
(9, 'product', 'productcategory'),
(10, 'product', 'productimage'),
(23, 'product_attribute', 'productattribute'),
(24, 'product_category', 'productcategory'),
(22, 'product_image', 'productimage'),
(6, 'sessions', 'session');

-- --------------------------------------------------------

--
-- Table structure for table `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` int(11) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2018-02-02 07:30:26.697052'),
(2, 'auth', '0001_initial', '2018-02-02 07:30:27.533927'),
(3, 'admin', '0001_initial', '2018-02-02 07:30:27.794046'),
(4, 'admin', '0002_logentry_remove_auto_add', '2018-02-02 07:30:27.908651'),
(5, 'contenttypes', '0002_remove_content_type_name', '2018-02-02 07:30:28.104484'),
(6, 'auth', '0002_alter_permission_name_max_length', '2018-02-02 07:30:28.185761'),
(7, 'auth', '0003_alter_user_email_max_length', '2018-02-02 07:30:28.312902'),
(8, 'auth', '0004_alter_user_username_opts', '2018-02-02 07:30:28.383537'),
(9, 'auth', '0005_alter_user_last_login_null', '2018-02-02 07:30:28.532423'),
(10, 'auth', '0006_require_contenttypes_0002', '2018-02-02 07:30:28.585459'),
(11, 'auth', '0007_alter_validators_add_error_messages', '2018-02-02 07:30:28.632629'),
(12, 'sessions', '0001_initial', '2018-02-02 07:30:28.745425'),
(13, 'product', '0001_initial', '2018-02-02 07:33:04.852688'),
(14, 'auth', '0008_alter_user_username_max_length', '2018-02-05 14:16:36.556825'),
(15, 'order', '0001_initial', '2018-02-05 14:16:36.614237'),
(16, 'auction', '0001_initial', '2018-02-05 14:22:22.482463'),
(17, 'customer', '0001_initial', '2018-02-05 14:43:09.133477'),
(18, 'auction_customer', '0001_initial', '2018-02-05 14:46:24.344115'),
(19, 'organization', '0001_initial', '2018-02-05 14:58:30.069433'),
(20, 'bank', '0001_initial', '2018-02-05 15:01:23.022188'),
(21, 'organization_bank', '0001_initial', '2018-02-05 15:04:42.092938'),
(22, 'order_organization', '0001_initial', '2018-02-12 11:15:40.674191'),
(23, 'organization', '0002_auto_20180310_0909', '2018-03-10 09:10:22.364450'),
(24, 'customer', '0002_auto_20180311_0728', '2018-03-11 07:29:22.200749'),
(25, 'order', '0002_auto_20180311_1053', '2018-03-11 10:53:56.060817'),
(26, 'order', '0003_order_status', '2018-03-11 10:55:22.523547'),
(27, 'cart', '0001_initial', '2018-03-11 15:38:28.002203'),
(28, 'cart_product', '0001_initial', '2018-03-11 15:43:09.933115'),
(29, 'cart_product', '0002_auto_20180311_1842', '2018-03-11 18:43:00.691455'),
(30, 'product', '0002_auto_20180311_1918', '2018-03-11 19:18:50.192811'),
(31, 'cart_product', '0003_auto_20180311_1911', '2018-03-11 19:21:21.292831'),
(32, 'cart_product', '0004_auto_20180311_1918', '2018-03-11 19:21:21.356607'),
(33, 'auction', '0002_auto_20180311_1921', '2018-03-11 19:21:45.881210'),
(34, 'auction_customer', '0002_auto_20180311_1921', '2018-03-11 19:21:45.968356'),
(35, 'bank', '0002_auto_20180311_1921', '2018-03-11 19:21:46.041526'),
(36, 'customer', '0003_auto_20180311_1921', '2018-03-11 19:21:46.171503'),
(37, 'order_organization', '0002_auto_20180311_1921', '2018-03-11 19:21:46.261767'),
(38, 'organization', '0003_organization_thumbnail', '2018-03-11 19:21:55.269163'),
(39, 'organization_bank', '0002_auto_20180311_1921', '2018-03-11 19:21:55.332461'),
(40, 'cart_product', '0005_auto_20180311_1927', '2018-03-11 19:27:41.220407'),
(41, 'product', '0003_auto_20180311_1932', '2018-03-11 19:32:30.562131'),
(42, 'auction_customer', '0003_auto_20180312_1047', '2018-03-12 10:48:31.327313'),
(43, 'auction_customer', '0004_auto_20180312_1051', '2018-03-12 10:51:08.312407'),
(44, 'auction', '0003_auto_20180312_1103', '2018-03-12 11:04:49.723789'),
(45, 'auction', '0003_auto_20180312_1119', '2018-03-12 11:20:00.780642'),
(46, 'organization_bank', '0003_auto_20180312_1126', '2018-03-12 11:26:27.614787'),
(47, 'organization_bank', '0004_auto_20180312_1128', '2018-03-12 11:28:29.657548'),
(48, 'order_organization', '0003_auto_20180312_1133', '2018-03-12 11:33:25.288110'),
(49, 'order_organization', '0004_auto_20180312_1134', '2018-03-12 11:34:49.255964'),
(50, 'order', '0004_auto_20180312_1136', '2018-03-12 12:02:00.186196'),
(51, 'order', '0005_auto_20180312_1205', '2018-03-12 12:05:37.844792'),
(52, 'cart', '0002_auto_20180312_1209', '2018-03-12 12:10:06.166263'),
(55, 'cart_product', '0006_auto_20180312_1234', '2018-03-12 12:34:27.171568'),
(56, 'cart_product', '0007_auto_20180312_1234', '2018-03-12 12:35:05.132032'),
(57, 'cart_product', '0008_auto_20180312_1235', '2018-03-12 12:36:53.214329'),
(58, 'product', '0004_remove_product_organization', '2018-03-12 12:38:25.951395'),
(59, 'product', '0005_product_organization', '2018-03-12 12:46:11.761885'),
(61, 'product', '0006_auto_20180312_1317', '2018-03-12 13:17:46.450231'),
(62, 'product', '0007_delete_productattribute', '2018-03-12 13:17:46.518093'),
(63, 'product_attribute', '0001_initial', '2018-03-12 13:20:14.782231'),
(64, 'product_category', '0001_initial', '2018-03-12 13:20:14.910850'),
(65, 'product_image', '0001_initial', '2018-03-12 13:20:15.118701'),
(66, 'product', '0008_auto_20180312_1321', '2018-03-12 13:21:55.536471'),
(67, 'product', '0009_auto_20180312_1323', '2018-03-12 13:24:16.960805'),
(70, 'customer', '0004_auto_20180319_0817', '2018-03-19 08:18:07.808530'),
(71, 'customer', '0005_auto_20180319_0818', '2018-03-19 08:18:57.946122'),
(72, 'customer', '0006_auto_20180319_0823', '2018-03-19 08:49:56.194570'),
(73, 'authtoken', '0001_initial', '2018-03-19 09:10:40.469829'),
(74, 'authtoken', '0002_auto_20160226_1747', '2018-03-19 09:10:40.774713'),
(75, 'product', '0010_auto_20180319_1730', '2018-03-19 10:30:17.938294'),
(76, 'organization', '0004_organization_category', '2018-03-20 12:15:35.019690'),
(77, 'organization', '0005_organization_info', '2018-03-20 12:23:35.977818'),
(78, 'product_attribute', '0002_productattribute_name', '2018-03-20 16:54:40.126964'),
(79, 'organization_promptpay', '0001_initial', '2018-04-03 10:28:40.377673'),
(80, 'order', '0006_order_slip', '2018-04-03 16:54:14.565602'),
(81, 'order', '0007_auto_20180404_2215', '2018-04-06 15:43:22.929129'),
(82, 'product_attribute', '0003_auto_20180406_2322', '2018-04-06 16:23:03.406732'),
(83, 'order', '0008_auto_20180407_2332', '2018-04-07 16:33:09.393940'),
(84, 'order', '0009_order_address', '2018-04-08 17:10:40.126914'),
(85, 'product', '0011_auto_20180409_2342', '2018-04-10 13:03:05.296892'),
(86, 'order', '0010_order_product_attribute', '2018-04-11 17:42:37.596842'),
(87, 'order', '0011_remove_order_product_attribute', '2018-04-11 17:53:42.280836'),
(88, 'order', '0012_order_attribute', '2018-04-11 18:06:16.902676'),
(89, 'order', '0013_auto_20180412_0108', '2018-04-11 18:09:04.065277'),
(90, 'cart_product', '0009_cartproduct_attribute', '2018-04-11 18:29:01.353701'),
(91, 'order', '0014_order_test', '2018-04-12 07:00:05.208431'),
(92, 'cart_product', '0010_auto_20180415_2223', '2018-04-15 15:24:04.503702'),
(93, 'order', '0014_auto_20180416_1057', '2018-04-16 03:57:31.196080'),
(94, 'auction', '0004_auction_customer', '2018-04-17 09:58:08.455575'),
(95, 'auction_customer', '0005_auto_20180417_1815', '2018-04-17 11:15:50.681560'),
(96, 'auction', '0005_auction_valid', '2018-04-17 16:44:43.460579'),
(97, 'organization', '0006_auto_20180424_2224', '2018-04-24 15:24:25.248517'),
(98, 'organization', '0007_auto_20180425_1217', '2018-04-25 05:17:59.483471');

-- --------------------------------------------------------

--
-- Table structure for table `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `django_session`
--

INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES
('k6puabf773b9zpvae585ixnbhxj4sdc1', 'NTFiOTRiOTkzZjZhMmNkYjMwYTNiOGJjYzBhNjMzMDFhNjhkOTI4ZDp7Il9hdXRoX3VzZXJfaGFzaCI6ImQzODUzMmM4OWJhYTMwYWRkNjI4Y2IyNDBkMWRmZTgzNWRhZjA5ODgiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIyIn0=', '2018-04-02 09:10:59.157139'),
('xmdmuwejec11ihp4gmq3ndrw8tgs6qqk', 'NTFiOTRiOTkzZjZhMmNkYjMwYTNiOGJjYzBhNjMzMDFhNjhkOTI4ZDp7Il9hdXRoX3VzZXJfaGFzaCI6ImQzODUzMmM4OWJhYTMwYWRkNjI4Y2IyNDBkMWRmZTgzNWRhZjA5ODgiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIyIn0=', '2018-04-02 08:53:01.698234');

-- --------------------------------------------------------

--
-- Table structure for table `Order`
--

CREATE TABLE `Order` (
  `id` int(11) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `quantity` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `status` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `buyer_id` int(11) NOT NULL,
  `slip` varchar(1023) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(1023) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `attribute_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Order`
--

INSERT INTO `Order` (`id`, `time`, `quantity`, `price`, `status`, `product_id`, `buyer_id`, `slip`, `address`, `attribute_id`) VALUES
(67, '2018-04-17 18:13:57', 1, '505.00', 1, 25, 21, '', 'ธรรมชาติ\\จิตใจ\\บางนา\\บางนา\\กรุงเทพ\\10633\\091-1254788', NULL),
(68, '2018-04-17 18:13:57', 1, '1114.00', 4, 26, 21, 'https://storage.googleapis.com/mejai/bank/transfer/slip/4acbbe8adbed48acb511b6ea9aec0818.jpg', 'ธรรมชาติ\\จิตใจ\\บางนา\\บางนา\\กรุงเทพ\\10633\\091-1254788', NULL),
(69, '2018-04-18 08:23:50', 1, '5000.00', 4, 27, 21, 'https://storage.googleapis.com/mejai/bank/transfer/slip/7c5e9419f98e4926868fe8571c37c8d8.jpeg', 'ณรง\\อิ่มเอม\\บางนา\\บางนา\\กรุงเทพ\\10633\\091-1254788', 15),
(70, '2018-04-18 08:31:34', 1, '40.00', 1, 28, 21, '', 'ณรง\\อิ่มเอม\\บางนา\\บางนา\\กรุงเทพ\\10633\\091-1254788', NULL),
(71, '2018-04-18 16:17:51', 1, '24000.00', 1, 19, 21, '', 'ณรง\\อิ่มเอม\\บางนา\\บางนา\\กรุงเทพ\\10633\\091-1254788', 13),
(72, '2018-04-24 12:25:05', 1, '650.00', 5, 33, 32, 'https://storage.googleapis.com/mejai/bank/transfer/slip/dfda527962ee4e0a84df23e41625c07b.jpg', '\\จิตใจ\\ไทย\\ไทย\\กทม\\555666\\8889996566', 18),
(73, '2018-04-25 09:54:46', 1, '24000.00', 5, 19, 31, 'https://storage.googleapis.com/mejai/bank/transfer/slip/bf8461b259c14b02b7ddf19c57beb7aa.png', 'สมศรี\\อ่าห๊ะ\\11\\11\\bangkok\\1111\\0876543', 13),
(74, '2018-04-25 09:58:18', 1, '5000.00', 5, 27, 31, 'https://storage.googleapis.com/mejai/bank/transfer/slip/99d69f67758f4faf9d434bb33216478e.png', 'สมศรี\\อ่าห๊ะ\\11\\11\\bangkok\\1111\\0876543', 15),
(75, '2018-04-26 14:46:20', 1, '450.00', 5, 35, 20, 'https://storage.googleapis.com/mejai/bank/transfer/slip/4acaf88308264416aca8f70d86cd00d3.jpg', 'สมชาย\\ใจดี\\ลาดกระบัง\\ลาดกระบัง\\กรุงเทพ\\10123\\088-1234567', 23),
(76, '2018-04-26 15:35:17', 1, '550.00', 1, 36, 30, '', 'สมศักดิ์\\สมศรี\\ลาดกระบัง\\ลาดกระบัง\\กรุงเทพมหานคร\\10123\\022145787984', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Order_Organization`
--

CREATE TABLE `Order_Organization` (
  `id` int(11) NOT NULL,
  `slip` char(255) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `amount` decimal(10,2) NOT NULL,
  `order_id` int(11) NOT NULL,
  `organization_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Organization`
--

CREATE TABLE `Organization` (
  `id` int(11) NOT NULL,
  `name` char(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `detail` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `fund` decimal(10,2) NOT NULL,
  `thumbnail` varchar(1023) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `category` int(11) NOT NULL,
  `info` longtext CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(128) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(254) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Organization`
--

INSERT INTO `Organization` (`id`, `name`, `detail`, `time`, `fund`, `thumbnail`, `category`, `info`, `password`, `email`) VALUES
(3, '1 Help 1 Life : น้ำสะอาดให้น้องดื่ม', 'เพราะโรงเรียนไม่มีเครื่องกรองน้ำ เราจึงอยากร่วมมอบเครื่องกรองน้ำเพื่อผลิตน้ำดื่มสะอาดให้เด็กนักเรียนโรงเรียนวัดคลองห้า จังหวัดสระบุรี', '2018-04-25 05:18:59', '30450.00', 'https://taejai.com/media/projects/709014497451244671045822018503014079321.jpg.370x220_q85_crop_upscale.jpg', 1, '<p>&#3609;&#3657;&#3635;&#3648;&#3611;&#3655;&#3609;&#3611;&#3633;&#3592;&#3592;&#3633;&#3618;&#3626;&#3635;&#3588;&#3633;&#3597;&#3605;&#3656;&#3629;&#3585;&#3634;&#3619;&#3604;&#3635;&#3619;&#3591;&#3594;&#3637;&#3623;&#3636;&#3605; &#3648;&#3617;&#3639;&#3656;&#3629;&#3650;&#3619;&#3591;&#3648;&#3619;&#3637;&#3618;&#3609;&#3586;&#3634;&#3604;&#3649;&#3588;&#3621;&#3609;&#3609;&#3657;&#3635;&#3607;&#3637;&#3656;&#3626;&#3632;&#3629;&#3634;&#3604;&#3652;&#3604;&#3657;&#3626;&#3619;&#3657;&#3634;&#3591;&#3612;&#3621;&#3585;&#3619;&#3632;&#3607;&#3610;&#3605;&#3656;&#3629;&#3626;&#3640;&#3586;&#3616;&#3634;&#3614;&#3586;&#3629;&#3591;&#3648;&#3604;&#3655;&#3585;&#3609;&#3633;&#3585;&#3648;&#3619;&#3637;&#3618;&#3609;</p>\r\n<br>\r\n<p>&#3585;&#3634;&#3619;&#3604;&#3639;&#3656;&#3617;&#3609;&#3657;&#3635;&#3607;&#3637;&#3656;&#3652;&#3617;&#3656;&#3626;&#3632;&#3629;&#3634;&#3604; &#3627;&#3619;&#3639;&#3629;&#3617;&#3637;&#3626;&#3634;&#3619;&#3605;&#3585;&#3588;&#3657;&#3634;&#3591;&#3588;&#3656;&#3629;&#3609;&#3586;&#3657;&#3634;&#3591;&#3617;&#3634;&#3585;&#3607;&#3635;&#3651;&#3627;&#3657;&#3648;&#3585;&#3636;&#3604;&#3650;&#3607;&#3625;&#3605;&#3656;&#3629;&#3619;&#3656;&#3634;&#3591;&#3585;&#3634;&#3618;&#3652;&#3604;&#3657; &#3648;&#3594;&#3656;&#3609; &#3650;&#3619;&#3588;&#3609;&#3636;&#3656;&#3623; &#3607;&#3657;&#3629;&#3591;&#3648;&#3626;&#3637;&#3618; &#3649;&#3621;&#3632;&#3607;&#3657;&#3629;&#3591;&#3619;&#3656;&#3623;&#3591;&#3652;&#3604;&#3657;</p>\r\n<br>\r\n<p>&#3650;&#3619;&#3591;&#3648;&#3619;&#3637;&#3618;&#3609;&#3623;&#3633;&#3604;&#3588;&#3621;&#3629;&#3591;&#3627;&#3657;&#3634; &#3592;&#3633;&#3591;&#3627;&#3623;&#3633;&#3604;&#3626;&#3619;&#3632;&#3610;&#3640;&#3619;&#3637; &#3617;&#3637;&#3609;&#3633;&#3585;&#3648;&#3619;&#3637;&#3618;&#3609;&#3607;&#3633;&#3657;&#3591;&#3627;&#3617;&#3604; 123 &#3588;&#3609; &#3648;&#3611;&#3655;&#3609;&#3648;&#3604;&#3655;&#3585;&#3629;&#3609;&#3640;&#3610;&#3634;&#3621; &#3649;&#3621;&#3632;&#3611;&#3619;&#3632;&#3606;&#3617;&#3624;&#3638;&#3585;&#3625;&#3634; &#3626;&#3616;&#3634;&#3614;&#3607;&#3634;&#3591;&#3588;&#3619;&#3629;&#3610;&#3588;&#3619;&#3633;&#3623;&#3586;&#3629;&#3591;&#3609;&#3633;&#3585;&#3648;&#3619;&#3637;&#3618;&#3609;&#3618;&#3634;&#3585;&#3592;&#3609;</p>\r\n\r\n<p>&#3607;&#3640;&#3585;&#3623;&#3633;&#3609;&#3609;&#3637;&#3657;&#3607;&#3634;&#3591;&#3650;&#3619;&#3591;&#3648;&#3619;&#3637;&#3618;&#3609;&#3652;&#3617;&#3656;&#3617;&#3637;&#3648;&#3588;&#3619;&#3639;&#3656;&#3629;&#3591;&#3585;&#3619;&#3629;&#3591;&#3609;&#3657;&#3635;&#3626;&#3635;&#3627;&#3619;&#3633;&#3610;&#3648;&#3604;&#3655;&#3585;&#3609;&#3633;&#3585;&#3648;&#3619;&#3637;&#3618;&#3609; &#3619;&#3623;&#3617;&#3606;&#3638;&#3591;&#3588;&#3640;&#3603;&#3588;&#3619;&#3641;&#3604;&#3657;&#3623;&#3618; &#3650;&#3619;&#3591;&#3648;&#3619;&#3637;&#3618;&#3609;&#3651;&#3594;&#3657;&#3623;&#3636;&#3608;&#3637;&#3621;&#3629;&#3591;&#3609;&#3657;&#3635;&#3613;&#3609;&#3585;&#3633;&#3585;&#3648;&#3585;&#3655;&#3610;&#3609;&#3657;&#3635;&#3652;&#3623;&#3657;&#3651;&#3609;&#3649;&#3607;&#3591;&#3588;&#3660; 3 &#3649;&#3607;&#3591;&#3588;&#3660; &#3617;&#3634;&#3648;&#3611;&#3655;&#3609;&#3648;&#3623;&#3621;&#3634; 30 &#3611;&#3637; &#3650;&#3604;&#3618;&#3609;&#3657;&#3635;&#3648;&#3627;&#3621;&#3656;&#3634;&#3609;&#3637;&#3657;&#3606;&#3641;&#3585;&#3592;&#3635;&#3627;&#3609;&#3656;&#3634;&#3618;&#3609;&#3657;&#3635;&#3612;&#3656;&#3634;&#3609;&#3607;&#3656;&#3629;&#3609;&#3657;&#3635;&#3648;&#3614;&#3639;&#3656;&#3629;&#3651;&#3627;&#3657;&#3648;&#3604;&#3655;&#3585;&#3609;&#3633;&#3585;&#3648;&#3619;&#3637;&#3618;&#3609;&#3652;&#3604;&#3657;&#3629;&#3640;&#3611;&#3650;&#3616;&#3588;&#3610;&#3619;&#3636;&#3650;&#3616;&#3588; </p>\r\n<br>\r\n<p>&#3650;&#3588;&#3619;&#3591;&#3585;&#3634;&#3619; 1 Help 1 Life &#3612;&#3621;&#3636;&#3605;&#3609;&#3657;&#3635;&#3626;&#3632;&#3629;&#3634;&#3604;&#3648;&#3614;&#3639;&#3656;&#3629;&#3626;&#3640;&#3586;&#3616;&#3634;&#3614;&#3609;&#3657;&#3629;&#3591; &#3586;&#3629;&#3591;&#3650;&#3619;&#3591;&#3648;&#3619;&#3637;&#3618;&#3609;&#3623;&#3633;&#3604;&#3588;&#3621;&#3629;&#3591;&#3627;&#3657;&#3634;&#3648;&#3627;&#3655;&#3609;&#3623;&#3656;&#3634; &quot;&#3609;&#3657;&#3635;&quot; &#3648;&#3611;&#3655;&#3609;&#3626;&#3636;&#3656;&#3591;&#3592;&#3635;&#3648;&#3611;&#3655;&#3609;&#3605;&#3656;&#3629;&#3585;&#3634;&#3619;&#3604;&#3635;&#3619;&#3591;&#3594;&#3637;&#3614;&#3586;&#3629;&#3591;&#3617;&#3609;&#3640;&#3625;&#3618;&#3660; &#3611;&#3619;&#3632;&#3650;&#3618;&#3594;&#3609;&#3660;&#3586;&#3629;&#3591;&#3585;&#3634;&#3619;&#3604;&#3639;&#3656;&#3617;&#3609;&#3657;&#3635;&#3626;&#3632;&#3629;&#3634;&#3604;&#3617;&#3637;&#3617;&#3634;&#3585;&#3617;&#3634;&#3618; &#3649;&#3605;&#3656;&#3607;&#3634;&#3591;&#3650;&#3619;&#3591;&#3648;&#3619;&#3637;&#3618;&#3609;&#3652;&#3617;&#3656;&#3617;&#3637;&#3591;&#3610;&#3611;&#3619;&#3632;&#3617;&#3634;&#3603;&#3607;&#3637;&#3656;&#3592;&#3632;&#3610;&#3619;&#3636;&#3627;&#3634;&#3619;&#3585;&#3634;&#3619;&#3592;&#3633;&#3604;&#3585;&#3634;&#3619; &#3649;&#3621;&#3632;&#3652;&#3617;&#3656;&#3652;&#3604;&#3657;&#3619;&#3633;&#3610;&#3585;&#3634;&#3619;&#3626;&#3609;&#3633;&#3610;&#3626;&#3609;&#3640;&#3609;&#3648;&#3607;&#3656;&#3634;&#3607;&#3637;&#3656;&#3588;&#3623;&#3619;&#3609;&#3633;&#3585;</p>\r\n<br>\r\n<p>&#3588;&#3640;&#3603;&#3588;&#3619;&#3641;&#3607;&#3637;&#3656;&#3650;&#3619;&#3591;&#3648;&#3619;&#3637;&#3618;&#3609;&#3585;&#3655;&#3618;&#3633;&#3591;&#3652;&#3617;&#3656;&#3618;&#3656;&#3629;&#3607;&#3657;&#3629; &#3617;&#3637;&#3588;&#3623;&#3634;&#3617;&#3614;&#3618;&#3634;&#3618;&#3634;&#3617;&#3627;&#3634;&#3591;&#3610;&#3611;&#3619;&#3632;&#3617;&#3634;&#3603;&#3648;&#3614;&#3639;&#3656;&#3629;&#3617;&#3634;&#3614;&#3633;&#3602;&#3609;&#3634;&#3648;&#3619;&#3639;&#3656;&#3629;&#3591;&#3609;&#3657;&#3635;&#3604;&#3639;&#3656;&#3617;&#3651;&#3627;&#3657;&#3604;&#3637;&#3586;&#3638;&#3657;&#3609;</p>', '12345678', 'hi@abc.com'),
(4, 'หมื่นฝันปันโอกาส', 'ทำให้ 10,000 ฝันของเด็กนักเรียนได้ไปต่อ ด้วยการสนับสนุนครูจาก Teach For Thailand ให้ได้สอนในโรงเรียนครบ 3 เทอม จนจบปีการศึกษา 2561', '2018-04-17 08:13:46', '2500.00', 'https://taejai.com/media/projects/FcF7e9H6HpdjqBNT9KeBqM.jpg.370x220_q85_crop_upscale.jpg', 1, '<p> &#3607;&#3635;&#3652;&#3617;?</p>\r\n\r\n<p>&#3605;&#3657;&#3629;&#3591;&#3626;&#3609;&#3633;&#3610;&#3626;&#3609;&#3640;&#3609;&#3588;&#3619;&#3641;&#3592;&#3634;&#3585; Teach For Thailand &#3626;&#3633;&#3597;&#3621;&#3633;&#3585;&#3625;&#3603;&#3660;&#3619;&#3641;&#3611;&#3604;&#3636;&#3609;&#3626;&#3629;</p>\r\n\r\n<p>&quot;10,000 &#3613;&#3633;&#3609;&#3592;&#3632;&#3617;&#3637;&#3650;&#3629;&#3585;&#3634;&#3626;&#3652;&#3604;&#3657;&#3648;&#3611;&#3655;&#3609;&#3592;&#3619;&#3636;&#3591;&quot; &#3648;&#3614;&#3619;&#3634;&#3632;&#3588;&#3619;&#3641;&#3588;&#3639;&#3629;&#3649;&#3619;&#3591;&#3610;&#3633;&#3609;&#3604;&#3634;&#3621;&#3651;&#3592; &#3626;&#3656;&#3591;&#3648;&#3626;&#3619;&#3636;&#3617;&#3651;&#3627;&#3657;&#3648;&#3604;&#3655;&#3585;&#3585;&#3621;&#3657;&#3634;&#3588;&#3636;&#3604; &#3585;&#3621;&#3657;&#3634;&#3607;&#3635; &#3585;&#3621;&#3657;&#3634;&#3613;&#3633;&#3609; &#3649;&#3621;&#3632;&#3607;&#3635;&#3607;&#3640;&#3585;&#3629;&#3618;&#3656;&#3634;&#3591;&#3648;&#3614;&#3639;&#3656;&#3629;&#3651;&#3627;&#3657;&#3648;&#3604;&#3655;&#3585;&#3617;&#3637;&#3629;&#3609;&#3634;&#3588;&#3605;&#3607;&#3637;&#3656;&#3604;&#3637;&#3585;&#3623;&#3656;&#3634;</p>\r\n\r\n<p>&#3611;&#3633;&#3592;&#3592;&#3640;&#3610;&#3633;&#3609;&#3611;&#3633;&#3592;&#3592;&#3633;&#3618;&#3626;&#3609;&#3633;&#3610;&#3626;&#3609;&#3640;&#3609;&#3627;&#3621;&#3633;&#3585;&#3592;&#3634;&#3585; &#3585;&#3607;&#3617;. &#3606;&#3641;&#3585;&#3592;&#3633;&#3604;&#3626;&#3619;&#3619;&#3651;&#3627;&#3657;&#3649;&#3585;&#3656;&#3588;&#3623;&#3634;&#3617;&#3648;&#3619;&#3656;&#3591;&#3604;&#3656;&#3623;&#3609;&#3629;&#3639;&#3656;&#3609; &#3592;&#3638;&#3591;&#3626;&#3656;&#3591;&#3612;&#3621;&#3651;&#3627;&#3657;&#3648;&#3585;&#3636;&#3604;&#3585;&#3634;&#3619;&#3586;&#3634;&#3604;&#3649;&#3588;&#3621;&#3609;&#3591;&#3610;&#3611;&#3619;&#3632;&#3617;&#3634;&#3603;&#3648;&#3614;&#3639;&#3656;&#3629;&#3592;&#3656;&#3634;&#3618;&#3648;&#3591;&#3636;&#3609;&#3648;&#3604;&#3639;&#3629;&#3609;&#3588;&#3619;&#3641; &#3649;&#3605;&#3656;&#3648;&#3604;&#3655;&#3585;&#3609;&#3633;&#3585;&#3648;&#3619;&#3637;&#3618;&#3609;&#3618;&#3633;&#3591;&#3605;&#3657;&#3629;&#3591;&#3652;&#3604;&#3657;&#3619;&#3633;&#3610;&#3585;&#3634;&#3619;&#3624;&#3638;&#3585;&#3625;&#3634; &#3652;&#3604;&#3657;&#3648;&#3619;&#3637;&#3618;&#3609;&#3619;&#3641;&#3657; &#3588;&#3619;&#3641;&#3652;&#3604;&#3657;&#3626;&#3629;&#3609;&#3605;&#3656;&#3629; &#3650;&#3588;&#3619;&#3591;&#3585;&#3634;&#3619;&#3605;&#3657;&#3629;&#3591;&#3604;&#3635;&#3648;&#3609;&#3636;&#3609;&#3605;&#3656;&#3629;</p>\r\n\r\n<p>#&#3627;&#3617;&#3639;&#3656;&#3609;&#3613;&#3633;&#3609;&#3611;&#3633;&#3609;&#3650;&#3629;&#3585;&#3634;&#3626;</p>\r\n\r\n<p>&#3607;&#3635;&#3651;&#3627;&#3657; 10,000 &#3613;&#3633;&#3609;&#3586;&#3629;&#3591;&#3648;&#3604;&#3655;&#3585;&#3609;&#3633;&#3585;&#3648;&#3619;&#3637;&#3618;&#3609;&#3652;&#3604;&#3657;&#3652;&#3611;&#3605;&#3656;&#3629; &#3604;&#3657;&#3623;&#3618;&#3585;&#3634;&#3619;&#3626;&#3609;&#3633;&#3610;&#3626;&#3609;&#3640;&#3609;&#3588;&#3619;&#3641;&#3592;&#3634;&#3585; Teach For Thailand &#3651;&#3627;&#3657;&#3652;&#3604;&#3657;&#3626;&#3629;&#3609;&#3651;&#3609;&#3650;&#3619;&#3591;&#3648;&#3619;&#3637;&#3618;&#3609;&#3588;&#3619;&#3610; 3 &#3648;&#3607;&#3629;&#3617; &#3592;&#3609;&#3592;&#3610;&#3611;&#3637;&#3585;&#3634;&#3619;&#3624;&#3638;&#3585;&#3625;&#3634; 2561</p>\r\n\r\n<p>Teach For Thailand &#3648;&#3611;&#3655;&#3609;&#3626;&#3617;&#3634;&#3594;&#3636;&#3585;&#3651;&#3609;&#3648;&#3588;&#3619;&#3639;&#3629;&#3586;&#3656;&#3634;&#3618;&#3629;&#3591;&#3588;&#3660;&#3585;&#3619;&#3652;&#3617;&#3656;&#3649;&#3626;&#3623;&#3591;&#3627;&#3634;&#3585;&#3635;&#3652;&#3619; Teach For All &#3607;&#3637;&#3656;&#3617;&#3637;&#3626;&#3617;&#3634;&#3594;&#3636;&#3585;&#3629;&#3618;&#3641;&#3656;&#3651;&#3609; 43 &#3611;&#3619;&#3632;&#3648;&#3607;&#3624;&#3607;&#3633;&#3656;&#3623;&#3650;&#3621;&#3585;</p>\r\n\r\n<p>Teach For Thailand &#3617;&#3637;&#3614;&#3633;&#3609;&#3608;&#3585;&#3636;&#3592;&#3626;&#3635;&#3588;&#3633;&#3597;&#3651;&#3609;&#3585;&#3634;&#3619;&#3586;&#3633;&#3610;&#3648;&#3588;&#3621;&#3639;&#3656;&#3629;&#3609;&#3648;&#3614;&#3639;&#3656;&#3629;&#3585;&#3634;&#3619;&#3648;&#3611;&#3621;&#3637;&#3656;&#3618;&#3609;&#3649;&#3611;&#3621;&#3591;&#3585;&#3634;&#3619;&#3624;&#3638;&#3585;&#3625;&#3634;&#3652;&#3607;&#3618;&#3604;&#3657;&#3623;&#3618; &ldquo;&#3588;&#3619;&#3641;&#3612;&#3641;&#3657;&#3609;&#3635;&#3585;&#3634;&#3619;&#3648;&#3611;&#3621;&#3637;&#3656;&#3618;&#3609;&#3649;&#3611;&#3621;&#3591;&rdquo; &ldquo;&#3623;&#3634;&#3591;&#3649;&#3612;&#3609; &#3626;&#3619;&#3657;&#3634;&#3591;&#3626;&#3639;&#3656;&#3629; &#3621;&#3591;&#3617;&#3639;&#3629;&#3626;&#3629;&#3609;&rdquo; &#3629;&#3618;&#3656;&#3634;&#3591;&#3626;&#3619;&#3657;&#3634;&#3591;&#3626;&#3619;&#3619;&#3588;&#3660; &#3651;&#3627;&#3657;&#3588;&#3623;&#3634;&#3617;&#3626;&#3635;&#3588;&#3633;&#3597;&#3651;&#3609;&#3612;&#3621;&#3585;&#3634;&#3619;&#3648;&#3619;&#3637;&#3618;&#3609;&#3619;&#3641;&#3657;&#3586;&#3629;&#3591;&#3609;&#3633;&#3585;&#3648;&#3619;&#3637;&#3618;&#3609; &ldquo;&#3588;&#3619;&#3641;&#3612;&#3641;&#3657;&#3609;&#3635;&#3631;&rdquo; &#3626;&#3629;&#3609;&#3651;&#3609;&#3650;&#3619;&#3591;&#3648;&#3619;&#3637;&#3618;&#3609;&#3586;&#3618;&#3634;&#3618;&#3650;&#3629;&#3585;&#3634;&#3626;&#3648;&#3611;&#3655;&#3609;&#3648;&#3623;&#3621;&#3634; 2 &#3611;&#3637; &#3614;&#3623;&#3585;&#3648;&#3586;&#3634;&#3652;&#3604;&#3657;&#3648;&#3619;&#3637;&#3618;&#3609;&#3619;&#3641;&#3657;&#3649;&#3621;&#3632;&#3648;&#3586;&#3657;&#3634;&#3651;&#3592;&#3588;&#3623;&#3634;&#3617;&#3607;&#3657;&#3634;&#3607;&#3634;&#3618;&#3586;&#3629;&#3591;&#3619;&#3632;&#3610;&#3610;&#3585;&#3634;&#3619;&#3624;&#3638;&#3585;&#3625;&#3634;&#3652;&#3607;&#3618; &#3586;&#3603;&#3632;&#3648;&#3604;&#3637;&#3618;&#3623;&#3585;&#3633;&#3609; &ldquo;&#3588;&#3619;&#3641;&#3612;&#3641;&#3657;&#3609;&#3635;&#3631;&rdquo; &#3592;&#3632;&#3652;&#3604;&#3657;&#3614;&#3633;&#3602;&#3609;&#3634;&#3624;&#3633;&#3585;&#3618;&#3616;&#3634;&#3614; &#3649;&#3621;&#3632;&#3616;&#3634;&#3623;&#3632;&#3588;&#3623;&#3634;&#3617;&#3648;&#3611;&#3655;&#3609;&#3612;&#3641;&#3657;&#3609;&#3635; &#3649;&#3621;&#3632;&#3616;&#3634;&#3618;&#3627;&#3621;&#3633;&#3591;&#3592;&#3634;&#3585; 2 &#3611;&#3637; &ldquo;&#3588;&#3619;&#3641;&#3612;&#3641;&#3657;&#3609;&#3635;&#3631;&rdquo; &#3648;&#3627;&#3621;&#3656;&#3634;&#3609;&#3637;&#3657;&#3588;&#3639;&#3629;&#3648;&#3588;&#3619;&#3639;&#3629;&#3586;&#3656;&#3634;&#3618;&#3612;&#3641;&#3657;&#3609;&#3635;&#3631; &#3607;&#3637;&#3656;&#3592;&#3632;&#3619;&#3656;&#3623;&#3617;&#3585;&#3633;&#3609;&#3586;&#3633;&#3610;&#3648;&#3588;&#3621;&#3639;&#3656;&#3629;&#3609;&#3651;&#3609;&#3607;&#3640;&#3585;&#3616;&#3634;&#3588;&#3626;&#3656;&#3623;&#3609;&#3629;&#3618;&#3656;&#3634;&#3591;&#3617;&#3637;&#3614;&#3621;&#3633;&#3591; &#3648;&#3614;&#3639;&#3656;&#3629;&#3585;&#3634;&#3619;&#3648;&#3611;&#3621;&#3637;&#3656;&#3618;&#3609;&#3649;&#3611;&#3621;&#3591;&#3607;&#3634;&#3591;&#3585;&#3634;&#3619;&#3624;&#3638;&#3585;&#3625;&#3634;&#3652;&#3607;&#3618;</p>', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `Organization_Bank`
--

CREATE TABLE `Organization_Bank` (
  `id` int(11) NOT NULL,
  `name` char(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `type` char(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `number` char(32) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `branch` char(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `organization_id` int(11) NOT NULL,
  `bank_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Organization_Bank`
--

INSERT INTO `Organization_Bank` (`id`, `name`, `type`, `number`, `branch`, `organization_id`, `bank_id`) VALUES
(1, 'John Doe', 'Savings Account', '123-4-56789-0', 'Bangkok', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `Organization_Promptpay`
--

CREATE TABLE `Organization_Promptpay` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `number` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `organization_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `Organization_Promptpay`
--

INSERT INTO `Organization_Promptpay` (`id`, `name`, `number`, `organization_id`) VALUES
(1, 'John ...', '098765432', 1),
(2, 'สมศรี ใจดี', '0909203999', 3);

-- --------------------------------------------------------

--
-- Table structure for table `Product`
--

CREATE TABLE `Product` (
  `id` int(11) NOT NULL,
  `name` char(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `detail` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `price` decimal(10,2) NOT NULL,
  `quantity` int(11) NOT NULL,
  `auction` tinyint(1) NOT NULL,
  `type` int(11) NOT NULL,
  `viewer` int(11) NOT NULL,
  `hit` int(11) NOT NULL,
  `thumbnail` varchar(1023) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `created_time` timestamp NOT NULL DEFAULT '2018-04-04 15:25:29' ON UPDATE CURRENT_TIMESTAMP,
  `organization_id` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `owner_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Product`
--

INSERT INTO `Product` (`id`, `name`, `detail`, `price`, `quantity`, `auction`, `type`, `viewer`, `hit`, `thumbnail`, `created_time`, `organization_id`, `category_id`, `owner_id`) VALUES
(19, 'โน้ตบุ้ค', 'ทั้งเบาและบางเฉียบ ทั้งยังเร็วขึ้นและทรงพลังขึ้นยิ่งกว่า \nทั้งเป็นจอภาพโน้ตบุ๊ค Mac ที่สว่างและมีสีสันสดใสที่สุดเท่าที่เคยมีมา \nและยังมี Touch Bar แถบกระจกที่สามารถใช้งาน Multi-Touch ซึ่งได้รับ\nการผสานรวมให้เป็นส่วนหนึ่งของคีย์บอร์ด เพื่อให้คุณใช้งานเครื่องมือ\nที่ต้องการได้ในทุกเวลาที่ต้องการ ทั้งหมดนี้รวมอยู่ใน MacBook Pro \nที่สร้างขึ้นบนแนวคิดสุดล้ำ และวันนี้ก็พร้อมแล้วสำหรับแนวคิด\nที่ล้ำหน้าไม่แพ้กันของคุณ', '24000.00', 0, 0, 0, 0, 0, 'https://storage.googleapis.com/mejai/product/image/ad74aea8696f4351855ad7e0e06c5f30.jpg', '2018-04-17 08:21:56', 3, 2, 20),
(20, 'รองเท้าสีขาว', 'รองเท้าสีขาวใส่สบาย ใหม่มาก', '2500.00', 1, 0, 0, 0, 0, 'https://storage.googleapis.com/mejai/product/image/af2e3addf11448d0a2af7f7a833b4839.jpg', '2018-04-17 08:39:24', 3, 1, 20),
(21, 'รองเท้าสีขาว', 'รองเท้าสีขาวใส่สบาย ใหม่มาก', '2500.00', 1, 0, 0, 0, 0, 'https://storage.googleapis.com/mejai/product/image/4b0330f229bb455082f244426f959035.jpg', '2018-04-17 08:39:27', 3, 1, 20),
(24, 'ส้อม 3 อัน', '', '300.00', 0, 1, 0, 0, 0, 'https://storage.googleapis.com/mejai/product/image/b667b9cb27e5496bac1c807dd8e9eca6.jpg', '2018-04-17 11:39:14', 3, 3, 20),
(25, 'หนังสือเล่มเก่า', '', '500.00', 0, 1, 0, 0, 0, 'https://storage.googleapis.com/mejai/product/image/c686371a3b974a21a9afa51379aab2a2.jpg', '2018-04-17 17:48:04', 3, 5, 21),
(26, 'หนังสือเล่มใหม่', '', '20.00', 0, 1, 0, 0, 0, 'https://storage.googleapis.com/mejai/product/image/ddbcca3814154889b505c567eed45be2.jpg', '2018-04-17 18:04:01', 3, 5, 21),
(27, 'จักรยาน', 'รายละเอียดของสินค้านี้', '5000.00', 0, 0, 0, 0, 0, 'https://storage.googleapis.com/mejai/product/image/6bd84a2d99be42ccb60382e84b9c184e.jpeg', '2018-04-18 08:22:44', 3, 3, 21),
(28, 'กระเป๋า', '', '10.00', 0, 1, 0, 0, 0, 'https://storage.googleapis.com/mejai/product/image/18e5efb56e0c45b0bb21eebfa01e085b.jpeg', '2018-04-18 08:26:44', 3, 1, 21),
(29, 'สนามหญ้า', '', '5000.00', 0, 1, 0, 0, 0, 'https://storage.googleapis.com/mejai/product/image/5023c593ea564247920cb0796a1c2be0.jpg', '2018-04-18 12:01:18', 4, 3, 21),
(30, 'ธรรมชาติ', '', '12000.00', 5, 0, 0, 0, 0, 'https://storage.googleapis.com/mejai/product/image/aa1c04f1978a4d5d815ef701bec131ee.jpg', '2018-04-18 16:18:45', 4, 3, 21),
(31, 'ทริปท่องเที่ยว', '', '5000.00', 5, 0, 0, 0, 0, 'https://storage.googleapis.com/mejai/product/image/66afb1391ccd4f79b165a513f4d64bc5.jpg', '2018-04-21 16:47:16', 4, 5, 22),
(32, 'กระเป๋า', '', '100.00', 0, 1, 0, 0, 0, 'https://storage.googleapis.com/mejai/product/image/e3ae7a384e574e46a5723e1fd686413c.jpeg', '2018-04-24 07:28:45', 4, 1, 22),
(33, 'ส้นสูง', '', '650.00', 0, 0, 0, 0, 0, 'https://storage.googleapis.com/mejai/product/image/7b79733c995a45328c06f5c2ecdca0bf.jpg', '2018-04-24 12:24:07', 3, 1, 31),
(34, 'ตัวอย่าง2', '', '500.00', 0, 0, 0, 0, 0, 'https://storage.googleapis.com/mejai/product/image/d36fe577fd2343ea8c428ac50174f215.jpeg', '2018-04-25 10:06:36', 3, 5, 21),
(35, 'เสื้อเชิ้ตสีน้ำเงิน', 'เสื้อเชิ้ตสีน้ำเงิน เนื้อผ้าใส่สบาย', '450.00', 0, 0, 0, 0, 0, 'https://storage.googleapis.com/mejai/product/image/78291560b2f14f88a65837702a512102.jpeg', '2018-04-26 14:32:23', 3, 1, 22),
(36, 'เสื้อสีดำ', 'เสื้อสีดำ ใส่สบาย ไม่ร้อน', '500.00', 0, 1, 0, 0, 0, 'https://storage.googleapis.com/mejai/product/image/6b37ed372cf64503b0cdd9e0ef64a2ac.jpg', '2018-04-26 15:10:31', 4, 1, 20);

-- --------------------------------------------------------

--
-- Table structure for table `Product_Attribute`
--

CREATE TABLE `Product_Attribute` (
  `id` int(11) NOT NULL,
  `value` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `quantity` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `Product_Attribute`
--

INSERT INTO `Product_Attribute` (`id`, `value`, `quantity`, `product_id`, `name`) VALUES
(12, 'ปี 2016', 5, 19, 'รุ่น'),
(13, 'ปี 2017', 4, 19, 'รุ่น'),
(14, 'ปี 2018', 3, 19, 'รุ่น'),
(15, 'แดง', 10, 27, 'สี'),
(16, 'ดำ', 5, 27, 'สี'),
(17, 'เล็ก', 50, 33, 'ขนาด'),
(18, 'กลาง', 50, 33, 'ขนาด'),
(19, 'ใหญ่', 50, 33, 'ขนาด'),
(20, 'ใหม่', 5, 34, 'รุ่น'),
(21, 'เก่า', 2, 34, 'รุ่น'),
(22, 'เล็ก', 10, 35, 'ขนาด'),
(23, 'กลาง', 15, 35, 'ขนาด'),
(24, 'ใหญ่', 10, 35, 'ขนาด');

-- --------------------------------------------------------

--
-- Table structure for table `Product_Category`
--

CREATE TABLE `Product_Category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `Product_Category`
--

INSERT INTO `Product_Category` (`id`, `name`) VALUES
(1, 'เครื่องแต่งกาย'),
(2, 'เครื่องใช้ไฟฟ้า'),
(3, 'สุขภาพ'),
(4, 'เฟอร์นิเจอร์'),
(5, 'หนังสือ');

-- --------------------------------------------------------

--
-- Table structure for table `Product_Image`
--

CREATE TABLE `Product_Image` (
  `id` int(11) NOT NULL,
  `url` varchar(1023) COLLATE utf8_unicode_ci NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `Product_Image`
--

INSERT INTO `Product_Image` (`id`, `url`, `product_id`) VALUES
(26, 'https://storage.googleapis.com/mejai/product/image/4a8eb734ddd64dfbbe321b4e6f0b06ec.png', 1),
(27, 'https://storage.googleapis.com/mejai/product/image/02f4faf4f7504badbbb8af37717d4154.png', 1),
(28, 'https://storage.googleapis.com/mejai/product/image/bb7d0a701300494ba3e833fbe8ce832d.png', 1),
(29, 'https://storage.googleapis.com/mejai/product/image/443bf31a902c48a1a0da0ee3ddd62e9d.png', 2),
(30, 'https://storage.googleapis.com/mejai/product/image/b29ab939a77d4acf968489174e18dcca.png', 1),
(31, 'https://storage.googleapis.com/mejai/product/image/66c87fd7107e401995bd0186f6ec41da.png', 1),
(32, 'https://storage.googleapis.com/mejai/product/image/5fc7a65142064b8da19b7a6a0a668c68.png', 1),
(33, 'https://storage.googleapis.com/mejai/product/image/1443fc310d1c42fc8d79c4f105c5b589.png', 1),
(34, 'https://storage.googleapis.com/mejai/product/image/1c274c0c31784dff84e595dab6058a53.png', 5),
(35, 'https://storage.googleapis.com/mejai/product/image/c7620ffe0ae94e57a91b9ac062769a10.png', 5),
(36, 'https://storage.googleapis.com/mejai/product/image/e167fcaf901945dabc57adbc03e9316b.png', 1),
(37, 'https://storage.googleapis.com/mejai/product/image/f3fca5cdf55e4d068b1f83ca8bcd9dcc.jpg', 17),
(38, 'https://storage.googleapis.com/mejai/product/image/4385c70b4ab14932bfb7190ee836d069.jpg', 17),
(39, 'https://storage.googleapis.com/mejai/product/image/0eb48c7c6a6940ae90154234e00e96f0.jpg', 18),
(40, 'https://storage.googleapis.com/mejai/product/image/e419110e83b94c14b25bbdc8797681c8.jpg', 18),
(41, 'https://storage.googleapis.com/mejai/product/image/c8b1aee102e248a6bc6e3c81b7acb8cc.jpg', 18),
(42, 'https://storage.googleapis.com/mejai/product/image/540bbcbb289040179fb86e04966eb942.jpg', 18),
(43, 'https://storage.googleapis.com/mejai/product/image/c47f0f327e37472f81f336bbb29afaef.jpg', 18),
(44, 'https://storage.googleapis.com/mejai/product/image/8823f5556ecd41a7804f2e4a8394331f.jpg', 19),
(45, 'https://storage.googleapis.com/mejai/product/image/79026dca28ab4325963f9ad46fa4e1a6.jpg', 19),
(46, 'https://storage.googleapis.com/mejai/product/image/ad74aea8696f4351855ad7e0e06c5f30.jpg', 19),
(47, 'https://storage.googleapis.com/mejai/product/image/af2e3addf11448d0a2af7f7a833b4839.jpg', 20),
(48, 'https://storage.googleapis.com/mejai/product/image/4b0330f229bb455082f244426f959035.jpg', 21),
(49, 'https://storage.googleapis.com/mejai/product/image/856bc8cbcf824cb69cdd67857900ba97.jpg', 24),
(50, 'https://storage.googleapis.com/mejai/product/image/b667b9cb27e5496bac1c807dd8e9eca6.jpg', 24),
(51, 'https://storage.googleapis.com/mejai/product/image/c686371a3b974a21a9afa51379aab2a2.jpg', 25),
(52, 'https://storage.googleapis.com/mejai/product/image/ddbcca3814154889b505c567eed45be2.jpg', 26),
(53, 'https://storage.googleapis.com/mejai/product/image/003e7e7bf4fb4de38788b76ed50e9b97.jpeg', 27),
(54, 'https://storage.googleapis.com/mejai/product/image/6bd84a2d99be42ccb60382e84b9c184e.jpeg', 27),
(55, 'https://storage.googleapis.com/mejai/product/image/18e5efb56e0c45b0bb21eebfa01e085b.jpeg', 28),
(56, 'https://storage.googleapis.com/mejai/product/image/fe35f9b040d64eec9a8305832e05d043.jpg', 29),
(57, 'https://storage.googleapis.com/mejai/product/image/5023c593ea564247920cb0796a1c2be0.jpg', 29),
(58, 'https://storage.googleapis.com/mejai/product/image/3ee3b87de35847868dc39ca65248c49a.jpg', 30),
(59, 'https://storage.googleapis.com/mejai/product/image/aa1c04f1978a4d5d815ef701bec131ee.jpg', 30),
(60, 'https://storage.googleapis.com/mejai/product/image/05b01da3f8974efa8c83e2447bce6d0d.jpg', 31),
(61, 'https://storage.googleapis.com/mejai/product/image/1cfadbf4a0124d8eb3bb675b23c9f34e.jpg', 31),
(62, 'https://storage.googleapis.com/mejai/product/image/a5dbc404ea1142fda3ef52800668e82b.jpg', 31),
(63, 'https://storage.googleapis.com/mejai/product/image/66afb1391ccd4f79b165a513f4d64bc5.jpg', 31),
(64, 'https://storage.googleapis.com/mejai/product/image/8167e8be930b4cde9030f9d029dc3767.jpg', 31),
(65, 'https://storage.googleapis.com/mejai/product/image/3967a15e14d048a2ab1ac0ce9268139d.jpeg', 32),
(66, 'https://storage.googleapis.com/mejai/product/image/e3ae7a384e574e46a5723e1fd686413c.jpeg', 32),
(67, 'https://storage.googleapis.com/mejai/product/image/7b79733c995a45328c06f5c2ecdca0bf.jpg', 33),
(68, 'https://storage.googleapis.com/mejai/product/image/5b910ce976a1454eb143648f0d5a093b.jpeg', 34),
(69, 'https://storage.googleapis.com/mejai/product/image/d54886ac52dd493cbb9a0becd63338d6.jpeg', 34),
(70, 'https://storage.googleapis.com/mejai/product/image/d36fe577fd2343ea8c428ac50174f215.jpeg', 34),
(71, 'https://storage.googleapis.com/mejai/product/image/e38304a7c34846b9a32ac81394dedb6a.jpeg', 35),
(72, 'https://storage.googleapis.com/mejai/product/image/fd2865cdd962482a969bcc33a6e3b2d6.jpeg', 35),
(73, 'https://storage.googleapis.com/mejai/product/image/78291560b2f14f88a65837702a512102.jpeg', 35),
(74, 'https://storage.googleapis.com/mejai/product/image/6b37ed372cf64503b0cdd9e0ef64a2ac.jpg', 36);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Auction`
--
ALTER TABLE `Auction`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `product_id` (`product_id`),
  ADD KEY `Auction_customer_id_945a5a74_fk_Customer_id` (`customer_id`);

--
-- Indexes for table `Auction_Customer`
--
ALTER TABLE `Auction_Customer`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Auction_Customer_auction_id_db809779_fk_Auction_id` (`auction_id`),
  ADD KEY `Auction_Customer_customer_id_7032c52a_fk_Customer_id` (`customer_id`);

--
-- Indexes for table `authtoken_token`
--
ALTER TABLE `authtoken_token`
  ADD PRIMARY KEY (`key`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- Indexes for table `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissi_permission_id_84c5c92e_fk_auth_permission_id` (`permission_id`);

--
-- Indexes for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indexes for table `auth_user`
--
ALTER TABLE `auth_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_groups_user_id_94350c0c_uniq` (`user_id`,`group_id`),
  ADD KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`);

--
-- Indexes for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_user_permissions_user_id_14a6b632_uniq` (`user_id`,`permission_id`),
  ADD KEY `auth_user_user_perm_permission_id_1fbb5f2c_fk_auth_permission_id` (`permission_id`);

--
-- Indexes for table `Bank`
--
ALTER TABLE `Bank`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Cart`
--
ALTER TABLE `Cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Cart_customer_id_d63b05f2_fk_Customer_id` (`customer_id`);

--
-- Indexes for table `Cart_Product`
--
ALTER TABLE `Cart_Product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Cart_Product_cart_id_223af4d3_fk_Cart_id` (`cart_id`),
  ADD KEY `Cart_Product_product_id_813fd90d_fk_Product_id` (`product_id`),
  ADD KEY `Cart_Product_attribute_id_f300dc25_fk_Product_Attribute_id` (`attribute_id`);

--
-- Indexes for table `Customer`
--
ALTER TABLE `Customer`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Customer_username_10871abc_uniq` (`username`);

--
-- Indexes for table `Customer_groups`
--
ALTER TABLE `Customer_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Customer_groups_customer_id_group_id_ecf455d5_uniq` (`customer_id`,`group_id`),
  ADD KEY `Customer_groups_group_id_9e7c83a6_fk_auth_group_id` (`group_id`);

--
-- Indexes for table `Customer_user_permissions`
--
ALTER TABLE `Customer_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Customer_user_permission_customer_id_permission_i_2148f912_uniq` (`customer_id`,`permission_id`),
  ADD KEY `Customer_user_permis_permission_id_f5a39657_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin__content_type_id_c4bce8eb_fk_django_content_type_id` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`);

--
-- Indexes for table `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Indexes for table `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_de54fa62` (`expire_date`);

--
-- Indexes for table `Order`
--
ALTER TABLE `Order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Order_product_id_abf21980_fk_Product_id` (`product_id`),
  ADD KEY `Order_buyer_id_1dd0963a_fk_Customer_id` (`buyer_id`),
  ADD KEY `Order_attribute_id_32b940ad_fk_Product_Attribute_id` (`attribute_id`);

--
-- Indexes for table `Order_Organization`
--
ALTER TABLE `Order_Organization`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Order_Organization_order_id_eb0c4144_fk_Order_id` (`order_id`),
  ADD KEY `Order_Organization_organization_id_7fc12f29_fk_Organization_id` (`organization_id`);

--
-- Indexes for table `Organization`
--
ALTER TABLE `Organization`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Organization_Bank`
--
ALTER TABLE `Organization_Bank`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Organization_Bank_organization_id_a194812a_fk_Organization_id` (`organization_id`),
  ADD KEY `Organization_Bank_bank_id_aecd78d0_fk_Bank_id` (`bank_id`);

--
-- Indexes for table `Organization_Promptpay`
--
ALTER TABLE `Organization_Promptpay`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Organization_Promptp_organization_id_ce584b7c_fk_Organizat` (`organization_id`);

--
-- Indexes for table `Product`
--
ALTER TABLE `Product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Product_organization_id_623da968_fk_Organization_id` (`organization_id`),
  ADD KEY `Product_category_id_0a9a7411_fk_Product_Category_id` (`category_id`),
  ADD KEY `Product_owner_id_8d6773ae_fk_Customer_id` (`owner_id`);

--
-- Indexes for table `Product_Attribute`
--
ALTER TABLE `Product_Attribute`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Product_Attribute_product_id_d5b22045_fk_Product_id` (`product_id`);

--
-- Indexes for table `Product_Category`
--
ALTER TABLE `Product_Category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Product_Image`
--
ALTER TABLE `Product_Image`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Product_Image_product_id_f2ecec26_fk_Product_id` (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Auction`
--
ALTER TABLE `Auction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `Auction_Customer`
--
ALTER TABLE `Auction_Customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- AUTO_INCREMENT for table `auth_user`
--
ALTER TABLE `auth_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Bank`
--
ALTER TABLE `Bank`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `Cart`
--
ALTER TABLE `Cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `Cart_Product`
--
ALTER TABLE `Cart_Product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `Customer`
--
ALTER TABLE `Customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `Customer_groups`
--
ALTER TABLE `Customer_groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Customer_user_permissions`
--
ALTER TABLE `Customer_user_permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=99;

--
-- AUTO_INCREMENT for table `Order`
--
ALTER TABLE `Order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT for table `Organization`
--
ALTER TABLE `Organization`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `Organization_Bank`
--
ALTER TABLE `Organization_Bank`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Organization_Promptpay`
--
ALTER TABLE `Organization_Promptpay`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Product`
--
ALTER TABLE `Product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `Product_Attribute`
--
ALTER TABLE `Product_Attribute`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `Product_Category`
--
ALTER TABLE `Product_Category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `Product_Image`
--
ALTER TABLE `Product_Image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Auction`
--
ALTER TABLE `Auction`
  ADD CONSTRAINT `Auction_customer_id_945a5a74_fk_Customer_id` FOREIGN KEY (`customer_id`) REFERENCES `Customer` (`id`),
  ADD CONSTRAINT `Auction_product_id_61dace7d_fk_Product_id` FOREIGN KEY (`product_id`) REFERENCES `Product` (`id`);

--
-- Constraints for table `Auction_Customer`
--
ALTER TABLE `Auction_Customer`
  ADD CONSTRAINT `Auction_Customer_auction_id_db809779_fk_Auction_id` FOREIGN KEY (`auction_id`) REFERENCES `Auction` (`id`),
  ADD CONSTRAINT `Auction_Customer_customer_id_7032c52a_fk_Customer_id` FOREIGN KEY (`customer_id`) REFERENCES `Customer` (`id`);

--
-- Constraints for table `authtoken_token`
--
ALTER TABLE `authtoken_token`
  ADD CONSTRAINT `authtoken_token_user_id_35299eff_fk_Customer_id` FOREIGN KEY (`user_id`) REFERENCES `Customer` (`id`);

--
-- Constraints for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissi_permission_id_84c5c92e_fk_auth_permission_id` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Constraints for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permissi_content_type_id_2f476e4b_fk_django_content_type_id` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Constraints for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD CONSTRAINT `auth_user_user_perm_permission_id_1fbb5f2c_fk_auth_permission_id` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `Cart`
--
ALTER TABLE `Cart`
  ADD CONSTRAINT `Cart_customer_id_d63b05f2_fk_Customer_id` FOREIGN KEY (`customer_id`) REFERENCES `Customer` (`id`);

--
-- Constraints for table `Cart_Product`
--
ALTER TABLE `Cart_Product`
  ADD CONSTRAINT `Cart_Product_attribute_id_f300dc25_fk_Product_Attribute_id` FOREIGN KEY (`attribute_id`) REFERENCES `Product_Attribute` (`id`),
  ADD CONSTRAINT `Cart_Product_cart_id_223af4d3_fk_Cart_id` FOREIGN KEY (`cart_id`) REFERENCES `Cart` (`id`),
  ADD CONSTRAINT `Cart_Product_product_id_813fd90d_fk_Product_id` FOREIGN KEY (`product_id`) REFERENCES `Product` (`id`);

--
-- Constraints for table `Customer_groups`
--
ALTER TABLE `Customer_groups`
  ADD CONSTRAINT `Customer_groups_customer_id_f5f45cf5_fk_Customer_id` FOREIGN KEY (`customer_id`) REFERENCES `Customer` (`id`),
  ADD CONSTRAINT `Customer_groups_group_id_9e7c83a6_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Constraints for table `Customer_user_permissions`
--
ALTER TABLE `Customer_user_permissions`
  ADD CONSTRAINT `Customer_user_permis_permission_id_f5a39657_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `Customer_user_permissions_customer_id_27413c2b_fk_Customer_id` FOREIGN KEY (`customer_id`) REFERENCES `Customer` (`id`);

--
-- Constraints for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin__content_type_id_c4bce8eb_fk_django_content_type_id` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `Order`
--
ALTER TABLE `Order`
  ADD CONSTRAINT `Order_attribute_id_32b940ad_fk_Product_Attribute_id` FOREIGN KEY (`attribute_id`) REFERENCES `Product_Attribute` (`id`),
  ADD CONSTRAINT `Order_buyer_id_1dd0963a_fk_Customer_id` FOREIGN KEY (`buyer_id`) REFERENCES `Customer` (`id`),
  ADD CONSTRAINT `Order_product_id_abf21980_fk_Product_id` FOREIGN KEY (`product_id`) REFERENCES `Product` (`id`);

--
-- Constraints for table `Order_Organization`
--
ALTER TABLE `Order_Organization`
  ADD CONSTRAINT `Order_Organization_order_id_eb0c4144_fk_Order_id` FOREIGN KEY (`order_id`) REFERENCES `Order` (`id`),
  ADD CONSTRAINT `Order_Organization_organization_id_7fc12f29_fk_Organization_id` FOREIGN KEY (`organization_id`) REFERENCES `Organization` (`id`);

--
-- Constraints for table `Organization_Bank`
--
ALTER TABLE `Organization_Bank`
  ADD CONSTRAINT `Organization_Bank_bank_id_aecd78d0_fk_Bank_id` FOREIGN KEY (`bank_id`) REFERENCES `Bank` (`id`),
  ADD CONSTRAINT `Organization_Bank_organization_id_a194812a_fk_Organization_id` FOREIGN KEY (`organization_id`) REFERENCES `Organization` (`id`);

--
-- Constraints for table `Organization_Promptpay`
--
ALTER TABLE `Organization_Promptpay`
  ADD CONSTRAINT `Organization_Promptp_organization_id_ce584b7c_fk_Organizat` FOREIGN KEY (`organization_id`) REFERENCES `Organization` (`id`);

--
-- Constraints for table `Product`
--
ALTER TABLE `Product`
  ADD CONSTRAINT `Product_category_id_0a9a7411_fk_Product_Category_id` FOREIGN KEY (`category_id`) REFERENCES `Product_Category` (`id`),
  ADD CONSTRAINT `Product_organization_id_623da968_fk_Organization_id` FOREIGN KEY (`organization_id`) REFERENCES `Organization` (`id`),
  ADD CONSTRAINT `Product_owner_id_8d6773ae_fk_Customer_id` FOREIGN KEY (`owner_id`) REFERENCES `Customer` (`id`);

--
-- Constraints for table `Product_Attribute`
--
ALTER TABLE `Product_Attribute`
  ADD CONSTRAINT `Product_Attribute_product_id_d5b22045_fk_Product_id` FOREIGN KEY (`product_id`) REFERENCES `Product` (`id`);

--
-- Constraints for table `Product_Image`
--
ALTER TABLE `Product_Image`
  ADD CONSTRAINT `Product_Image_product_id_f2ecec26_fk_Product_id` FOREIGN KEY (`product_id`) REFERENCES `Product` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
