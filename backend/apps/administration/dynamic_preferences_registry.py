# blog/dynamic_preferences_registry.py

from dynamic_preferences.types import StringPreference
from dynamic_preferences.preferences import Section
from dynamic_preferences.registries import global_preferences_registry

# we create some section objects to link related preferences together

company = Section('company')


@global_preferences_registry.register
class CompanyName(StringPreference):
    section = company
    name = 'legal_name'
    default = 'Emanuel Zúñiga Infante'


@global_preferences_registry.register
class CompanyComercialName(StringPreference):
    section = company
    name = 'comercial_name'
    default = 'iFact CR'


@global_preferences_registry.register
class CompanyIdType(StringPreference):
    section = company
    name = 'id_type'
    default = 'PERSON'


@global_preferences_registry.register
class CompanyId(StringPreference):
    section = company
    name = 'id'
    default = '1-1353-0032'


@global_preferences_registry.register
class CompanyLogo(StringPreference):
    section = company
    name = 'logo'
    default = 'compupz.png'


@global_preferences_registry.register
class CompanyLogoWidth(StringPreference):
    section = company
    name = 'logo_width'
    default = '110px'


@global_preferences_registry.register
class CompanyAddress1(StringPreference):
    section = company
    name = 'address1'
    default = '150m Norte de la guardia Rural'


@global_preferences_registry.register
class CompanyAddress2(StringPreference):
    section = company
    name = 'address2'
    default = 'Palmares, Daniel Flores, Pérez Zeledón'


@global_preferences_registry.register
class CompanyCountry(StringPreference):
    section = company
    name = 'country'
    default = 'Costa Rica'


@global_preferences_registry.register
class CompanyProvince(StringPreference):
    section = company
    name = 'province'
    default = 'San José'


@global_preferences_registry.register
class CompanyTelephones(StringPreference):
    section = company
    name = 'telephones'
    default = '8302-1964 / 2772-2914'


@global_preferences_registry.register
class CompanyEmail(StringPreference):
    section = company
    name = 'email'
    default = 'emanuelziga@gmail.com'
