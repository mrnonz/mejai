-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: backend_db_1
-- Generation Time: Apr 16, 2018 at 04:07 AM
-- Server version: 5.7.21
-- PHP Version: 7.1.9

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
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
(1, 'Siam Commercial Bank', 'ไทยพาณิชย์', 'SCB', '/url/scb.jpg'),
(2, 'Kasikornbank', 'กสิกรไทย', 'KBANK', '/url/kbnak.jpg');

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
(6, '2018-03-20 00:00:00.000000', 3);

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
(1, '2018-03-19 00:00:00.000000', '99.99', 2, 5, 1, 0),
(2, '2018-03-12 00:00:00.000000', '49.99', 3, 5, 2, 0),
(5, '2018-03-13 00:00:00.000000', '444.23', 4, 6, 3, 2),
(6, '2018-04-09 08:26:23.838333', '420.00', 1, 3, 6, 2),
(7, '2018-04-11 18:30:38.468813', '420.00', 10, 5, 6, 4);

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
(1, 'asdf@do.com', 'user123', 'askdfladf', 'hi', 'F', 'สมศักดิ์\\สมศรี\\ลาดกระบัง23\\ลาดกระบัง23\\กรุงเทพ\\10110\\084-6665478', '0812345678', 'https://storage.googleapis.com/mejai/customer/image/profile/6dbc858195454c1ca08f51389462666d.png', 5, 3, 1, '2018-03-19 08:18:05.922994', 'hdi', 1, 0, 0, NULL, 'eiei'),
(2, 'admin@mejai.com', 'admin', 'pbkdf2_sha256$36000$WmaOVKDus7tA$ezRsG5L1vWXzclNVaw523YeEyn28ZWNnrYdb51+5n0k=', NULL, NULL, NULL, NULL, '', 0, 0, 0, '2018-03-19 08:50:23.092870', '', 1, 1, 1, '2018-03-19 09:10:59.152542', ''),
(3, 'test@mejai.com', 'test', 'pbkdf2_sha256$36000$N4QC2Z2OQvZ1$JlgQv+rqxXT73csekSe1Qi/3XX2mHn/UDJ1l2/PnYRg=', 'asdf', 'M', '', '08123456', '/url/pic.jpg', 5, 10, 20, '2018-03-19 12:01:09.225324', 'นายไก่', 1, 1, 0, NULL, 'นอน'),
(4, 'ssoom@email.com', '', '1234ASH', NULL, NULL, NULL, NULL, '', 0, 0, 0, '2018-04-09 09:44:25.921688', 'สมชาย', 1, 0, 0, NULL, 'สมศรี'),
(12, 'mailmail@mail.com', 'mailmail@mail.com', '123456', NULL, NULL, NULL, NULL, '', 0, 0, 0, '2018-04-10 08:17:31.127724', 'สมศักดิ์', 1, 0, 0, NULL, 'สมศรี'),
(14, 'mailmail2@mail.com', 'mailmail2@mail.com', '123456', NULL, NULL, NULL, NULL, '', 0, 0, 0, '2018-04-10 08:17:50.773551', 'สมศักดิ์', 1, 0, 0, NULL, 'สมศรี'),
(16, 'f@mail.com', 'f@mail.com', '456789', NULL, NULL, NULL, NULL, '', 0, 0, 0, '2018-04-10 08:25:25.665721', 'สานน', 1, 0, 0, NULL, 'นาย'),
(17, 'f2@mail.com', 'f2@mail.com', '123456', NULL, NULL, NULL, NULL, '', 0, 0, 0, '2018-04-10 08:27:46.695381', 'สานน', 1, 0, 0, NULL, 'นาย'),
(18, 'a@mail.com', 'a@mail.com', '1234', NULL, NULL, NULL, NULL, '', 0, 0, 0, '2018-04-10 12:11:09.551396', 'ทดสอบ', 1, 0, 0, NULL, 'ทดสอบ'),
(19, 'a2@mail.com', 'a2@mail.com', '1234', NULL, NULL, NULL, NULL, '', 0, 0, 0, '2018-04-10 12:11:47.588854', 'ทดสอบ', 1, 0, 0, NULL, 'ทดสอบ');

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
(93, 'order', '0014_auto_20180416_1057', '2018-04-16 03:57:31.196080');

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
(1, '2018-04-11 18:08:09', 10, '555.55', 1, 1, 3, '/url.jpg', NULL, 9),
(2, '2018-04-11 18:08:30', 55, '22.22', 3, 2, 3, 'https://storage.googleapis.com/mejai/bank/transfer/slip/2e058c3a1d614798841ae927a24f3e79.png', NULL, 2),
(3, '2018-04-06 16:09:44', 10, '555.55', 2, 7, 1, 'https://storage.googleapis.com/mejai/bank/transfer/slip/93eacceece4849098247318e6e06443d.jpg', NULL, 0),
(4, '2018-04-06 16:09:58', 111, '11.11', 1, 10, 1, '', NULL, 0),
(6, '2018-04-07 16:39:57', 3, '150.00', 1, 1, 3, '', NULL, 0),
(8, '2018-04-07 16:40:23', 3, '150.00', 1, 1, 3, '', NULL, 0),
(9, '2018-04-07 16:40:23', 2, '120.00', 1, 11, 3, '', NULL, 0),
(10, '2018-04-07 16:41:46', 3, '150.00', 1, 1, 3, '', NULL, 0),
(11, '2018-04-07 16:41:46', 2, '120.00', 1, 11, 3, '', NULL, 0),
(12, '2018-04-07 16:44:06', 3, '150.00', 1, 1, 3, '', NULL, 0),
(13, '2018-04-07 16:44:06', 2, '120.00', 1, 11, 3, '', NULL, 0),
(14, '2018-04-07 16:45:06', 3, '150.00', 1, 1, 3, '', NULL, 0),
(15, '2018-04-07 16:45:06', 2, '120.00', 1, 11, 3, '', NULL, 0),
(16, '2018-04-07 16:46:33', 3, '150.00', 1, 1, 3, '', NULL, 0),
(17, '2018-04-07 16:46:33', 2, '120.00', 1, 11, 3, '', NULL, 0),
(18, '2018-04-08 17:13:52', 3, '150.00', 1, 1, 3, '', 'John\\Doe\\Ladkrabang\\Ladkrabang\\Bangkok\\10220\\087-64543214', 0),
(19, '2018-04-08 17:13:52', 2, '120.00', 1, 11, 3, '', 'John\\Doe\\Ladkrabang\\Ladkrabang\\Bangkok\\10220\\087-64543214', 0),
(20, '2018-04-09 08:28:42', 0, '420.00', 1, 6, 1, 'https://storage.googleapis.com/mejai/bank/transfer/slip/663f48ecea9941c79d51053c6a106c23.jpg', '\\\\\\\\\\\\', 0),
(21, '2018-04-09 08:30:23', 0, '420.00', 1, 6, 1, '', 'John\\John\\LK\\LK\\LK\\LK\\Doe', 0),
(22, '2018-04-09 08:30:59', 0, '420.00', 1, 6, 1, '', '\\\\LKB\\LKB\\LKB\\LKB\\', 0),
(23, '2018-04-09 08:31:54', 0, '420.00', 1, 6, 1, '', 'AS\\AS\\\\\\\\\\AS', 0),
(24, '2018-04-09 08:32:31', 0, '420.00', 1, 6, 1, '', '\\\\A\\NB\\C\\D\\', 0),
(25, '2018-04-09 08:40:01', 0, '420.00', 1, 6, 1, '', 'John\\John\\A\\NB\\C\\D\\Doe', 0),
(26, '2018-04-09 08:42:29', 0, '420.00', 1, 6, 1, '', 'John\\Doe\\A\\NB\\C\\D\\598877', 0),
(27, '2018-04-09 08:46:29', 0, '420.00', 4, 6, 1, 'https://storage.googleapis.com/mejai/bank/transfer/slip/e6007fb4a74240c69f32bdad5cddf699.jpg', 'John\\Doe\\A\\NB\\C\\D\\598877', 0),
(28, '2018-04-09 08:49:46', 0, '420.00', 1, 6, 1, 'https://storage.googleapis.com/mejai/bank/transfer/slip/1341fcb0c1e746e9a1f9607f3af28713.jpg', 'John\\Doe\\A\\NB\\C\\D\\598877', 0),
(29, '2018-04-09 08:53:24', 1, '420.00', 1, 6, 1, 'https://storage.googleapis.com/mejai/bank/transfer/slip/08ac4260c4a545eeaa525460c0ebde51.jpg', 'John\\Doe\\A\\NB\\C\\D\\598877', 0),
(30, '2018-04-09 09:12:33', 1, '420.00', 4, 6, 1, 'https://storage.googleapis.com/mejai/bank/transfer/slip/6cb06c6274d245a49b893bc396065cf2.jpg', 'John\\Doe\\LB\\FF\\LK\\DD\\084-6665478', 0),
(31, '2018-04-09 16:25:16', 3, '150.00', 1, 1, 3, '', 'John\\Doe\\Ladkrabang\\Ladkrabang\\Bangkok\\10220\\087-64543214', 0),
(32, '2018-04-09 16:25:16', 2, '120.00', 1, 11, 3, '', 'John\\Doe\\Ladkrabang\\Ladkrabang\\Bangkok\\10220\\087-64543214', 0),
(33, '2018-04-09 16:32:11', 3, '150.00', 1, 1, 3, '', 'ไทย\\ดี\\Ladkrabang\\Ladkrabang\\Bangkok\\10220\\087-64543214', 0),
(34, '2018-04-09 16:32:11', 2, '120.00', 1, 11, 3, '', 'ไทย\\ดี\\Ladkrabang\\Ladkrabang\\Bangkok\\10220\\087-64543214', 0),
(35, '2018-04-09 17:38:40', 1, '420.00', 1, 6, 1, '', 'สมศักดิ์\\สมศรี\\ลาดกระบัง\\ลาดกระบัง\\กรุงเทพ\\10110\\084-6665478', 0),
(36, '2018-04-09 17:39:11', 1, '420.00', 1, 6, 1, '', 'สมศักดิ์\\สมศรี\\ลาดกระบัง2\\ลาดกระบัง2\\กรุงเทพ\\10110\\084-6665478', 0),
(37, '2018-04-09 17:41:00', 1, '420.00', 4, 6, 1, 'https://storage.googleapis.com/mejai/bank/transfer/slip/00a4c9dd090c40a796ba9a209cc2638b.jpg', 'สมศักดิ์\\สมศรี\\ลาดกระบัง23\\ลาดกระบัง23\\กรุงเทพ\\10110\\084-6665478', 0),
(38, '2018-04-11 18:14:30', 3, '150.00', 1, 1, 3, '', 'John\\Doe\\Ladkrabang\\Ladkrabang\\Bangkok\\10220\\087-64543214', 4),
(39, '2018-04-11 18:14:30', 2, '120.00', 1, 11, 3, '', 'John\\Doe\\Ladkrabang\\Ladkrabang\\Bangkok\\10220\\087-64543214', 2),
(40, '2018-04-16 03:57:39', 2, '125.66', 1, 1, 1, '', 'สมศักดิ์\\สมศรี\\ลาดกระบัง23\\ลาดกระบัง23\\กรุงเทพ\\10110\\084-6665478', NULL),
(41, '2018-04-16 03:59:55', 2, '125.66', 1, 1, 1, '', 'สมศักดิ์\\สมศรี\\ลาดกระบัง23\\ลาดกระบัง23\\กรุงเทพ\\10110\\084-6665478', NULL),
(42, '2018-04-16 03:59:55', 2, '420.00', 1, 16, 1, '', 'สมศักดิ์\\สมศรี\\ลาดกระบัง23\\ลาดกระบัง23\\กรุงเทพ\\10110\\084-6665478', NULL),
(43, '2018-04-16 03:59:55', 2, '125.66', 1, 1, 1, '', 'สมศักดิ์\\สมศรี\\ลาดกระบัง23\\ลาดกระบัง23\\กรุงเทพ\\10110\\084-6665478', NULL),
(44, '2018-04-16 04:06:04', 2, '125.66', 1, 1, 1, '', 'สมศักดิ์\\สมศรี\\ลาดกระบัง23\\ลาดกระบัง23\\กรุงเทพ\\10110\\084-6665478', NULL),
(45, '2018-04-16 04:07:14', 2, '125.66', 1, 1, 1, '', 'สมศักดิ์\\สมศรี\\ลาดกระบัง23\\ลาดกระบัง23\\กรุงเทพ\\10110\\084-6665478', NULL),
(46, '2018-04-16 04:07:14', 2, '420.00', 1, 16, 1, '', 'สมศักดิ์\\สมศรี\\ลาดกระบัง23\\ลาดกระบัง23\\กรุงเทพ\\10110\\084-6665478', NULL),
(47, '2018-04-16 04:07:14', 2, '125.66', 1, 1, 1, '', 'สมศักดิ์\\สมศรี\\ลาดกระบัง23\\ลาดกระบัง23\\กรุงเทพ\\10110\\084-6665478', NULL);

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
  `info` longtext CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Organization`
--

INSERT INTO `Organization` (`id`, `name`, `detail`, `time`, `fund`, `thumbnail`, `category`, `info`) VALUES
(1, 'บริษัท A จำกัด', 'ข้อมูลเกี่ยวกับ บริษัท A จำกัด', '2018-03-20 12:24:24', '5000.00', 'http://123', 1, 'สวัสดีบริษัท A'),
(2, 'บริษัท ZXC จำกัด', 'ข้อมูลเกี่ยวกับ บริษัท ZXC จำกัด', '2018-03-20 12:24:36', '1234.56', 'http://abc.com', 2, 'สวัสดีบริษัท ZXC');

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
(1, 'John ...', '098765432', 1);

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
(1, 'เสื้อสีดำ', 'เสื้อสีดำมาก', '125.66', 30, 0, 0, 0, 0, 'https://storage.googleapis.com/mejai/product/image/e167fcaf901945dabc57adbc03e9316b.png', '2018-04-13 17:56:26', 2, 1, 1),
(2, 'เสื้อสีขาว', 'ขาวมากกกก', '345.66', 30, 0, 0, 0, 0, '/path/bbb.jpg', '2018-03-19 10:35:20', 1, 1, 1),
(3, 'เสื้อดำประมูล', 'ประมูลเสื้อดำกันนนนน', '55.10', 1, 1, 0, 0, 0, '/path/ab.jps', '2018-03-19 10:36:50', 2, 1, 1),
(5, 'เสื้อสีดำ', 'เสื้อสีดำ ราคาไม่แพง', '420.00', 11, 0, 0, 0, 0, 'https://storage.googleapis.com/mejai/product/image/c7620ffe0ae94e57a91b9ac062769a10.png', '2018-04-13 17:55:58', 1, 1, 2),
(6, 'เสื้อสีดำจริงๆ', 'เสื้อสีดำสวย ราคาไม่แพง', '420.00', 0, 0, 0, 0, 0, '', '2018-04-03 12:36:09', 1, 1, 2),
(7, 'เสื้อสีดำจริงๆนะ', 'เสื้อสีดำสวย ราคาไม่แพง', '420.00', 0, 0, 0, 0, 0, '', '2018-04-04 14:33:21', 1, 1, 2),
(10, 'เสื้อสีดำสุดๆๆ', 'เสื้อสีดำ ราคาไม่แพง', '420.00', 11, 0, 0, 0, 0, '', '2018-04-04 14:36:03', 1, 1, 2),
(11, 'เสื้อสีดำสุดๆๆ', 'เสื้อสีดำ ราคาไม่แพง', '420.00', 11, 0, 0, 0, 0, '', '2018-04-04 15:36:36', 1, 1, 2),
(12, 'เสื้อโปโลสีดำ', 'เสื้อโปโล', '550.00', 0, 0, 0, 0, 0, '', '2018-04-09 16:16:28', 1, 1, 2),
(13, 'เสื้อโปโลสีดำ', 'เสื้อโปโล', '550.00', 0, 0, 0, 0, 0, '', '2018-04-09 16:16:50', 1, 1, 2),
(14, 'เสื้อโปโลสีดำ', 'เสื้อโปโล', '550.00', 0, 0, 0, 0, 0, '', '2018-04-09 16:17:09', 1, 1, 2),
(15, 'กางเกงแดง', 'เสื้อสีดำ ราคาไม่แพง', '420.00', 11, 0, 0, 0, 0, '', '2018-04-10 06:31:37', 1, 1, 1),
(16, 'กางเกงแดง2', 'เสื้อสีดำ ราคาไม่แพง', '420.00', 11, 0, 0, 0, 0, '', '2018-04-10 08:41:33', 1, 1, 2);

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
(1, 'S', 5, 1, 'ขนาด'),
(2, 'M', 10, 1, 'ขนาด'),
(3, 'S', 23, 2, 'ขนาด'),
(4, 'S', 3, 6, 'ขนาด'),
(5, 'M', 15, 6, 'ขนาด'),
(6, 'L', 5, 6, 'ขนาด'),
(7, 'S', 3, 7, 'ขนาด'),
(8, 'M', 15, 7, 'ขนาด'),
(9, 'L', 5, 7, 'ขนาด');

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
(1, 'path/img1.jpg', 1),
(2, 'path/img2.jpg', 1),
(3, 'path/img3.jpg', 2),
(4, 'path1', 5),
(5, 'path2', 5),
(6, 'path3', 5),
(7, 'path1', 6),
(8, 'path2', 6),
(9, 'path3', 6),
(10, 'path1', 7),
(11, 'path2', 7),
(12, 'path3', 7),
(13, 'path1', 10),
(14, 'path2', 10),
(15, 'path3', 10),
(16, 'path1', 11),
(17, 'path2', 11),
(18, 'path3', 11),
(19, 'path1', 15),
(20, 'path2', 15),
(21, 'path1', 16),
(22, 'path2', 16),
(23, 'https://storage.googleapis.com/mejai/product/image/c821ddb9bb0c4f8681ab85267f02ef24.png', 1),
(24, 'https://storage.googleapis.com/mejai/product/image/80ea93c3b3494dfb8f746d73e9e1a0a1.png', 1),
(25, 'https://storage.googleapis.com/mejai/product/image/916e2da6eb174e00b8afc7170b3da817.png', 1),
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
(36, 'https://storage.googleapis.com/mejai/product/image/e167fcaf901945dabc57adbc03e9316b.png', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Auction`
--
ALTER TABLE `Auction`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `product_id` (`product_id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Cart`
--
ALTER TABLE `Cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `Cart_Product`
--
ALTER TABLE `Cart_Product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `Customer`
--
ALTER TABLE `Customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;

--
-- AUTO_INCREMENT for table `Order`
--
ALTER TABLE `Order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `Organization`
--
ALTER TABLE `Organization`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Organization_Bank`
--
ALTER TABLE `Organization_Bank`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Organization_Promptpay`
--
ALTER TABLE `Organization_Promptpay`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Product`
--
ALTER TABLE `Product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `Product_Attribute`
--
ALTER TABLE `Product_Attribute`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `Product_Category`
--
ALTER TABLE `Product_Category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `Product_Image`
--
ALTER TABLE `Product_Image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Auction`
--
ALTER TABLE `Auction`
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
