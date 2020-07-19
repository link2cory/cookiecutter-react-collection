{% if cookiecutter.tailwindcss == 'no' %}
import styled from 'styled-components'

const Styled{{ cookiecutter.component_name }} = styled.div``
{% else %}
import tw from 'twin.macro'

const Styled{{ cookiecutter.component_name }} = tw.div``
{% endif %}

export default Styled{{ cookiecutter.component_name }}
